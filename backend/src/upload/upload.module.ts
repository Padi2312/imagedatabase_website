import { Module } from "@nestjs/common";
import { ProviderModule } from "src/provider/provider.module";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";

@Module({
    imports: [ProviderModule],
    controllers: [UploadController],
    providers: [UploadService]
})
export class UploadModule { }