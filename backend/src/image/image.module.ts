import { DatabaseService } from './../database/database.service';
import { Module } from "@nestjs/common";
import { UploadService } from './../services/upload.service';
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";

@Module({
    imports: [],
    controllers: [ImageController],
    providers: [ImageService, UploadService, DatabaseService]
})
export class ImageModule { }