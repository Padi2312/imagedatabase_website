import {
  Entity,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'picture_tag' })
export class PicutreTag extends BaseEntity {

  @PrimaryColumn()
  pictureId!: number;

  @PrimaryColumn()
  tagId!: number;
}