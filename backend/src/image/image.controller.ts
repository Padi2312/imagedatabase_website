import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ImageService } from "./image.service";
import * as fs from 'fs';
import { FileInterceptor } from "@nestjs/platform-express";
import { UploadService } from "src/upload/upload.service";

@Controller('api/image')
export class ImageController {
    constructor(
        private readonly imageService: ImageService,
        private readonly uploadService: UploadService
    ) { }

    @Get("/random")
    getRandomImages() {

    }

    @Get("/search/:text")
    searchImages(@Param('text') text) {

    }

    @Post("/upload")
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(@UploadedFile() file: Express.Multer.File) {
        return this.uploadService.saveFile(file)
    }

    @Get("/download/:imageid")
    downloadImage(@Res() res, @Param('imageid') id) {
        const file = fs.createReadStream(__dirname + '/../../files/' + 'export.csv');
        res.set({
            'Content-Type': 'text/csv',
            'Content-Disposition': 'attachment; filename="export.csv"',
        });
        file.pipe(res);
    }
}