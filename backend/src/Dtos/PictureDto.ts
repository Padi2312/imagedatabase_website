import { Double } from 'typeorm';

export default interface PictureDto extends PictureExif {
  id?: number;
  artist?: string;
  path: string;
  originalname: string;
  name: string;
  usercomment?: string;
}

export interface PictureExif {
  YResolution?: number;
  XResolution?: number;
  ImageWidth?: number;
  Model?: string;
  ImageHeight?: number;
  Make?: string;
  Software?: string;
  YCbCrPositioning?: number;
  ImageDescription?: string;
  Orientation?: string;
  ModifyDate?: string;
  ExifVersion?: string;
  ColorSpace?: number;
  ExifImageWidth?: number;
  ISO?: number;
  OffsetTimeDigitized?: string;
  ExifImageHeight?: number;
  DateTimeOriginal?: string;
  WhiteBalance?: string;
  CreateDate?: string;
  FocalLength?: Double;
  ExposureTime?: Double;
  OffsetTime?: string;
  OffsetTimeOriginal?: string;
  Flash?: string;
  LightSource?: string;
  FNumber?: Double;
}
