import { DatabaseService } from 'src/database/database.service';
import ResponseHelper from './../utils/ResponseHelper';
import {
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
  ) {}

  @Get('/random')
  async getRandomImages() {
    try {
      const result = await this.databaseService.get20Pictures();
      console.log(result)
      return ResponseHelper.createSuccess(result);
    } catch (error) {
      return ResponseHelper.createError(
        error,
        'Es ist ein Fehler aufgetreten',
      );
    }
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

  @Post('/upload')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  uploadImage(@UploadedFiles() files: { image?: Express.Multer.File[] }) {
    if (files.image && files.image?.length > 0)
      return this.uploadService.saveFile(files.image);
  }

  @Get('/download/:imageid')
  downloadImage(@Res() res, @Param('imageid') id) {
    const fileName = 'Bild.png'; // Get Image Name from Database
    const file = fs.createReadStream(Utils.getImagePathWithName(fileName));
    res.set({
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    });
    file.pipe(res);
  }
}
