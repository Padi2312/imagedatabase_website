import {
  Entity,
  BaseEntity,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'picture_tag' })
export class PictureTag extends BaseEntity {

  @PrimaryColumn()
  pictureId!: number;

  @PrimaryColumn()
  tagId!: number;
}