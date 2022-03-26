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
      .where('picture.artist like :artist', { artist: `%${text}%` })
      .orWhere('picture.usercomment like :usercomment', {
        usercomment: `%${text}%`,
      })
      .orWhere('picture.originalname like :ogname', { ogname: `%${text}%` })
      .orWhere('tag.tagname like :tagname', { tagname: `%${text}%` })
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
    await this.addTags(data.tags, data.id);
    // await this.removeTagsLeft(data.tags, data.id);
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

  async addTags(tags: string[], pictureId: number) {
    tags.forEach(async (tag) => {
      const dbTag = await getManager().findOne(Tag, { tagname: tag });
      if (!dbTag) {
        return;
      }
      await getManager()
        .createQueryBuilder()
        .insert()
        .into(Tag)
        .values({ tagname: tag })
        .execute();
      const returnValue: Tag = await getManager().findOne(Tag, {
        tagname: tag,
      });
      await getManager()
        .createQueryBuilder()
        .insert()
        .into(PictureTag)
        .values({ pictureId: pictureId, tagId: returnValue.id })
        .execute();
    });
  }

  async removeTagsLeft(tags: Tag[], pictureId: number) {
    const results = await getManager().find(PictureTag, {
      pictureId: pictureId,
    });
    for (const result of results) {
      for (const tag of tags) {
        let found = false;
        if (result.tagId === tag.id) {
          found = true;
        }
        if (!found) {
          await getManager().delete(PictureTag, {
            pictureId: pictureId,
            tagId: result.tagId,
          });
        }
      }
    }
  }
}
