import { Module } from "@nestjs/common";
import { UploadService } from "src/services/upload.service";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";

@Module({
    imports: [],
    controllers: [ImageController],
    providers: [ImageService, UploadService]
})
export class ImageModule { }