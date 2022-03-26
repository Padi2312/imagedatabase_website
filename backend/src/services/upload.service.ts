import { Injectable } from '@nestjs/common';
import exifr from 'exifr';
import * as fs from 'fs';
import { Configuration } from 'src/Configuration';
import { DatabaseService } from 'src/database/database.service';
import PictureDto, { PictureExif } from 'src/Dtos/PictureDto';
import { ImageService } from 'src/image/image.service';
import ResponseHelper from 'src/utils/ResponseHelper';
import { Utils } from 'src/utils/Utils';

@Injectable()
export class UploadService {
  constructor(
    private readonly imageService: ImageService,
    private readonly databaseService: DatabaseService
  ) {
    this.createDir();
  }

  saveFile(fileList: Array<Express.Multer.File>) {
    let errorOnSavingFiles = [];
    fileList.forEach((file) => {
      try {
        const originalName = file.originalname;
        const imagePath = Utils.getImagePathWithName(originalName)

        //Write file to system
        fs.writeFileSync(imagePath, file.buffer)

        //Save exif data into database
        this.saveToDatabase(file, imagePath)

        //Save thumbnail on upload for more speed and efficiency
        this.imageService.generateThumbnail(originalName)
      } catch (err) {
        errorOnSavingFiles.push(file.originalname)
      }
    });

    if (errorOnSavingFiles.length > 0) {
      return ResponseHelper.createError(
        {
          info: 'Not uploaded files',
          files: errorOnSavingFiles,
        },
        'Could not upload all files file.',
      );
    } else {
      return ResponseHelper.createSuccess();
    }
  }

  private async saveToDatabase(file: Express.Multer.File, fileName: string) {
    return exifr.parse(fileName).then(async (exifData) => {
      const data: PictureExif = exifData
      let picture: PictureDto
      if (data === undefined) {
        picture = {
          artist: "",
          usercomment: "",
          path: fileName,
          name: file.originalname,
          originalname: file.originalname,
        }
      }
      else {
        picture = {
          artist: "",
          usercomment: "",
          path: fileName,
          name: file.originalname,
          originalname: file.originalname,
          YResolution: data.YResolution ?? null,
          XResolution: data.XResolution ?? null,
          ImageWidth: data.ImageWidth ?? null,
          Model: data.Model ?? null,
          ImageHeight: data.ImageHeight ?? null,
          Make: data.Make ?? null,
          Software: data.Software ?? null,
          YCbCrPositioning: data.YCbCrPositioning ?? null,
          ImageDescription: data.ImageDescription ?? null,
          Orientation: data.Orientation ?? null,
          ModifyDate: data.ModifyDate ?? null,
          ExifVersion: data.ExifVersion ?? null,
          ColorSpace: data.ColorSpace ?? null,
          ExifImageWidth: data.ExifImageWidth ?? null,
          ISO: data.ISO ?? null,
          OffsetTimeDigitized: data.OffsetTimeDigitized ?? null,
          ExifImageHeight: data.ExifImageHeight ?? null,
          DateTimeOriginal: data.DateTimeOriginal ?? null,
          WhiteBalance: data.WhiteBalance ?? null,
          CreateDate: data.CreateDate ?? null,
          FocalLength: data.FocalLength ?? null,
          ExposureTime: data.ExposureTime ?? null,
          OffsetTime: data.OffsetTime ?? null,
          OffsetTimeOriginal: data.OffsetTimeOriginal ?? null,
          Flash: data.Flash ?? null,
          LightSource: data.LightSource ?? null,
          FNumber: data.FNumber ?? null,
        }
      }

      try {
        const result = await this.databaseService.savePictureMetaData(picture)
        return true
      }
      catch (err) {
        throw err
      }
    })
  }

  private createDir() {
    if (!fs.existsSync(Configuration.imageDir)) {
      fs.mkdirSync(Configuration.imageDir);
    }
  }
}
