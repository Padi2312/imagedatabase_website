import { PictureTag } from './entities/PictureTag';
import { Tag } from './../database/entities/Tag';
import { Picture } from './entities/Picture';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import InsertPictureDto from './../Dtos/InsertPictureDto';
import PictureDto from 'src/Dtos/PictureDto';

@Injectable()
export class DatabaseService {
  async savePictureMetaData(body: InsertPictureDto) {
    await getManager()
      .createQueryBuilder()
      .insert()
      .into(Picture)
      .values(body.picture)
      .execute();
    await this.addTags(body.tags, body.picture);
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
      .orWhere('picture.usercomment like :usercomment', { usercomment: `%${text}%` })
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

  async updatePicture() {}

  async updateTags() {}

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

  async addTags(tags: string[], picture: PictureDto) {
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
        .values({ pictureId: picture.id, tagId: returnValue.id })
        .execute();
    });
  }
}
