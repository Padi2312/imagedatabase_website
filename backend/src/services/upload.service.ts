import  PictureDto from 'src/Dtos/PictureDto';
import { Injectable } from '@nestjs/common';
import exifr from 'exifr';
import * as fs from 'fs';
import { Configuration } from 'src/Configuration';
import { ImageService } from 'src/image/image.service';
import ResponseHelper from 'src/utils/ResponseHelper';
import { Utils } from 'src/utils/Utils';

@Injectable()
export class UploadService {
  constructor(private readonly imageService: ImageService) {
    this.createDir();
  }

  saveFile(fileList: Array<Express.Multer.File>) {
    let errorOnSavingFiles = [];
    fileList.forEach((file) => {
      try {
        const originalName = file.originalname;
        const imagePath = Utils.getImagePathWithName(originalName);
        //Write file to system
        fs.writeFileSync(imagePath, file.buffer);
        //Save exif data into database
        this.saveExifMetaData(imagePath);
        //Save thumbnail on upload for more speed and efficiency
        this.imageService.getThumbnail(originalName);
      } catch (err) {
        errorOnSavingFiles.push(file.originalname);
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

  private saveExifMetaData(fileName: string) {
    exifr.parse(fileName).then((res) => {
      console.log(res);

      const result = res as PictureDto;
      console.log(result.FocalLength)
      // TODO: Insert data into database
    });
  }

  private createDir() {
    if (!fs.existsSync(Configuration.imageDir)) {
      fs.mkdirSync(Configuration.imageDir);
    }
  }
}
