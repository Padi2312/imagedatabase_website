import { Controller, Get } from "@nestjs/common";
import { ProviderService } from "./provider.service";

@Controller('api/provider')
export class ProviderController {

    constructor(private readonly providerService: ProviderService) { }

    @Get("/image/:id")
    downloadImage() {

    }

}