import { Controller, Post } from "@nestjs/common";
import { MetaDataService } from "./metadata.service";

@Controller('api/metadata')
export class MetaDataController {
    constructor(private readonly metaDataService: MetaDataService) { }

    @Post("/tags")
    changeTags() {

    }

    @Post("/orientation")
    changeOrientation() {

    }

    @Post("/comment")
    addComment() {

    }

}