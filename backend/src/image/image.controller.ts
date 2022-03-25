import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import * as fs from 'fs';
import { UploadService } from "src/services/upload.service";
import { Utils } from "src/utils/Utils";
import { ImageService } from "./image.service";

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
    @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
    uploadImage(@UploadedFiles() files: { image?: Express.Multer.File[] }) {
        if (files.image && files.image?.length > 0)
            return this.uploadService.saveFile(files.image)
    }

    @Get("/download/:imageid")
    downloadImage(@Res() res, @Param('imageid') id) {
        const fileName = "Bild.png"// Get Image Name from Database
        const file = fs.createReadStream(Utils.getImagePathWithName(fileName));
        res.set({
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${fileName}"`,
        });
        file.pipe(res);
    }
}