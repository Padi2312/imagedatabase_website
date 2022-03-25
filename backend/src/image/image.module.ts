import { Module } from "@nestjs/common";
import { UploadModule } from "src/upload/upload.module";
import { ImageController } from "./image.controller";
import { ImageService } from "./image.service";

@Module({
    imports: [UploadModule],
    controllers: [ImageController],
    providers: [ImageService]
})
export class ImageModule { }