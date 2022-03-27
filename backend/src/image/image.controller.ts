import { DatabaseService } from 'src/database/database.service';
import ResponseHelper from './../utils/ResponseHelper';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { UploadService } from 'src/services/upload.service';
import { Utils } from 'src/utils/Utils';
import { ImageService } from './image.service';

@Controller('api/image')
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly uploadService: UploadService,
    private readonly databaseService: DatabaseService,
  ) { }

  @Get('/random')
  async getRandomImages() {
    return this.imageService.getRandomImages()

  }

  @Get('/search/:text')
  async searchImages(@Param('text') text) {
    try {
      const result = await this.databaseService.search(text);
      return ResponseHelper.createSuccess(result);
    } catch (error) {
      return ResponseHelper.createError(
        error,
        'Es ist wohl ein Fehler bei der Suche aufgetreten',
      );
    }
  }

  @Post("/tags")
  async changeTage(@Body() body) {
    try {
      await this.databaseService.updateTags(body.data)
      return ResponseHelper.createSuccess()
    }
    catch (err) {
      return ResponseHelper.createError(err, "Tags konnten nicht geändert werden.")
    }

  }

  @Post("/changedata")
  async changeData(@Body() body) {
    try {
      await this.databaseService.updateChangeableData(body.data)
      return ResponseHelper.createSuccess()
    }
    catch (err) {
      return ResponseHelper.createError(err, "Daten konnten nicht geändert werden.")
    }

  }

  @Post('/upload')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  uploadImage(@UploadedFiles() files: { image?: Express.Multer.File[] }) {
    if (files.image && files.image?.length > 0)
      return this.uploadService.saveFile(files.image);
  }

  @Get('/download/:imageid')
  async downloadImage(@Res() res, @Param('imageid') id) {
    try {
      const image = await this.databaseService.getPicture(id)
      const file = fs.createReadStream(Utils.getImagePathWithName(image.picture.originalname));
      res.set({
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${image.picture.originalname}"`,
      });
      file.pipe(res);
    }
    catch (err) {
      console.log(err)
    }

  }
}
