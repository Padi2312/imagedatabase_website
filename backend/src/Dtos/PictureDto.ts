import { Double } from "typeorm";

export default interface PictureDto {
  id: number;
  artist: string;
  path: string;
  originalname: string;
  usercomment: string;
  yresolution: number;
  xresolution: number;
  imagewidth: number;
  model: string;
  imageheight: number;
  make: string; 
  software: string;
  ycbcrpositioning: number;
  imagedescription: string;
  orientation: string;
  modifydate: string;
  exifversion: string;
  colorspace: number;
  exifimagewidth: number;
  iso: number;
  offsettimedigitized: string;
  exifimageheight: number;
  datetimeoriginal: string;
  whitebalance: string;
  createdate: string;
  focallength: Double;
  exposuretime: Double;
  offsettime: string;
  offsettimeoriginal: string;
  flash: string, 
  lightsource: string, 
  fnumber: Double;
}
