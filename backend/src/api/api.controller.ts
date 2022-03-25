import { Controller, Get } from "@nestjs/common";


@Controller('api')
export class ApiController {
    constructor() { }

    @Get("/")
    getApiVersion() {
        return {
            "version": 1,
            "dateTime": new Date().toISOString()
        }
    }

}