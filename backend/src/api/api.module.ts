import { Module } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { ApiController } from "./api.controller";

@Module({
    controllers: [ApiController],
    providers: [DatabaseService]
})
export class ApiModule { }