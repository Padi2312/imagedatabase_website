import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Double,
} from 'typeorm';

@Entity({ name: 'picture' })
export class Picture extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  artist!: string;

  @Column()
  usercomment!: string;

  @Column()
  yresolution!: number;

  @Column()
  xresolution!: number;

  @Column()
  imagewidth!: number;

  @Column()
  model!: string;

  @Column()
  imageheigth!: number;

  @Column()
  make!: string;

  @Column()
  software!: string;

  @Column()
  ycbcrpositioning!: number;

  @Column()
  imagedescription!: string;

  @Column()
  orientation!: string;

  @Column()
  modifydate!: Date;

  @Column()
  exifversion!: string;

  @Column()
  colorspace!: number;

  @Column()
  exifimagewidth!: number;

  @Column()
  iso!: number;

  @Column()
  offsettimedigitized!: string;

  @Column()
  exifimageheigth!: number;

  @Column()
  datetimeoriginal!: Date;

  @Column()
  whitebalance!: string;

  @Column()
  createdate!: Date;

  @Column({ type: 'double' })
  focallength!: Double;

  @Column({ type: 'double' })
  exposuretime!: Double;

  @Column()
  offsettime!: string;

  @Column()
  offsettimeoriginal!: string;

  @Column()
  flash!: string;

  @Column()
  lightsource!: string;

  @Column({ type: 'double' })
  fnumber!: Double;

}