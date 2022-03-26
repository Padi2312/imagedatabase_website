import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Tag } from './../database/entities/Tag';
import PictureDto from './../Dtos/PictureDto';
import UpdatePictureDto from './../Dtos/UpdatePictureDto';
import UpdateTagsDto from './../Dtos/UpdateTagsDto';
import { Picture } from './entities/Picture';
import { PictureTag } from './entities/PictureTag';

@Injectable()
export class DatabaseService {
  async savePictureMetaData(picture: PictureDto) {
    await getManager()
      .createQueryBuilder()
      .insert()
      .into(Picture)
      .values(picture)
      .execute();
  }

  async get20Pictures() {
    const results = await getManager()
      .createQueryBuilder()
      .select()
      .from(Picture, 'picture')
      .limit(20)
      .execute();
    return await this.modifyPictureResult(results);
  }

  async search(text: string) {
    const results = await getManager()
      .createQueryBuilder()
      .select()
      .from(Picture, 'picture')
      .leftJoinAndSelect('picture_tag', 'picture.id')
      .leftJoinAndSelect('tag', 'picture_tag.tagId')
      .where('picture.artist LIKE :artist', { artist: `%${text}%` })
      .orWhere('picture.usercomment LIKE :usercomment', {
        usercomment: `%${text}%`,
      })
      .orWhere('picture.originalname LIKE :ogname', { ogname: `%${text}%` })
      .orWhere('tag.tagname LIKE :tagname', { tagname: `%${text}%` })
      .execute();
    return await this.modifyPictureResult(results);
  }

  async getPicture(id: number) {
    const result: Picture = await getManager().query(
      'SELECT * FROM picture WHERE id = ?',
      [id],
    );
    const picture = this.toJson(result);
    const tags = await this.getTags(id);
    return { picture: picture[0], tags: tags };
  }

  async updatePicture(data: UpdatePictureDto) {
    await getManager()
      .createQueryBuilder()
      .update(Picture)
      .set({
        artist: data.artist,
        path: data.path,
        name: data.name,
        usercomment: data.usercomment,
        Orientation: data.orientation,
        ModifyDate: data.modifydate,
      })
      .where('id = :id', { id: data.id })
      .execute();
    const picture = await getManager().find(Picture, { id: data.id });
    return await this.modifyPictureResult(picture);
  }

  async updateTags(data: UpdateTagsDto) {
    for (const tag of data.tags) {
      await getManager()
        .createQueryBuilder()
        .insert()
        .into(Tag)
        .values({ tagname: tag })
        .orUpdate({ conflict_target: ['id'], overwrite: ['tagname'] })
        .execute();
    }
    const tagList: number[] = await this.getTagList(data);
    for (const tag of tagList) {
      await getManager()
        .createQueryBuilder()
        .insert()
        .into(PictureTag)
        .values({ pictureId: data.id, tagId: tag })
        .orIgnore()
        .execute();
    }
    const tags: PictureTag[] = await getManager().find(PictureTag, {
      pictureId: data.id,
    });
    for (const tag of tags) {
      const tagNumber = tag.tagId;
      let found = false;
      for (const tagId of tagList) {
        if (tagId == tagNumber) {
          found = true;
        }
      }
      if (!found) {
        await getManager().delete(PictureTag, {
          pictureId: data.id,
          tagId: tagNumber,
        });
      }
    }
  }

  toJson(input: any) {
    return Object.values(JSON.parse(JSON.stringify(input)));
  }

  async getTags(id: number): Promise<string[]> {
    let tags: string[] = [];
    const res: Tag[] = await getManager().query(
      'SELECT tag.id, tag.tagname FROM tag JOIN picture_tag ON tag.id = picture_tag.tagId WHERE picture_tag.pictureId = ?',
      [id],
    );
    res.forEach((tag) => {
      tags.push(tag.tagname);
    });
    return tags;
  }

  async modifyPictureResult(results: Picture[]) {
    const resultJson: Picture[] = Object.values(
      JSON.parse(JSON.stringify(results)),
    );
    let newpictures = [];
    for (const result of resultJson) {
      const tags = await this.getTags(result.id);
      newpictures.push({ picture: result, tags: tags });
    }
    return newpictures;
  }

  async getTagList(data: UpdateTagsDto) {
    let tagList: number[] = [];
    for (const tag of data.tags) {
      const res: Tag = await getManager().findOne(Tag, { tagname: tag });
      tagList.push(res.id);
    }
    return tagList;
  }

}
