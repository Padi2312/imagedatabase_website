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
  name!: string;



  @Column()
  YResolution: number;

  @Column()
  XResolution: number;

  @Column()
  ImageWidth: number;

  @Column()
  Model: string;

  @Column()
  ImageHeight: number;

  @Column()
  Make: string;

  @Column()
  Software: string;

  @Column()
  YCbCrPositioning: number;

  @Column()
  ImageDescription: string;

  @Column()
  Orientation: string;

  @Column()
  ModifyDate: string;

  @Column()
  ExifVersion: string;

  @Column()
  ColorSpace: number;

  @Column()
  ExifImageWidth: number;

  @Column()
  ISO: number;

  @Column()
  OffsetTimeDigitized: string;

  @Column()
  ExifImageHeight: number;

  @Column()
  DateTimeOriginal: string;

  @Column()
  WhiteBalance: string;

  @Column()
  CreateDate: string;

  @Column({ type: 'double' })
  FocalLength: Double;

  @Column({ type: 'double' })
  ExposureTime: Double;

  @Column()
  OffsetTime: string;

  @Column()
  OffsetTimeOriginal: string;

  @Column()
  Flash: string;

  @Column()
  LightSource: string;

  @Column({ type: 'double' })
  FNumber: Double;

}