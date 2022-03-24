import { Module } from "@nestjs/common";
import { MetaDataController } from "./metadata.controller";
import { MetaDataService } from "./metadata.service";

@Module({
    imports: [],
    controllers: [MetaDataController],
    providers: [MetaDataService]
})
export class MetaDataModule { }