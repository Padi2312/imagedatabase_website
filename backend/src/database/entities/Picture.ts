import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Double,
  Timestamp,
} from 'typeorm';

@Entity({ name: 'picture' })
export class Picture extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  artist!: string;

  @Column()
  path!: string;

  @Column()
  originalname: string;

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
  imageheight!: number;

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
  modifydate!: string;

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
  exifimageheight!: number;

  @Column()
  datetimeoriginal!: string;

  @Column()
  whitebalance!: string;

  @Column()
  createdate!: string;

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