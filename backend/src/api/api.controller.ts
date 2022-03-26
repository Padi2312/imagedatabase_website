import UpdatePictureDto from './../Dtos/UpdatePictureDto';
import ResponseHelper from './../utils/ResponseHelper';
import { DatabaseService } from './../database/database.service';
import { Controller, Get } from '@nestjs/common';
import UpdateTagsDto from 'src/Dtos/UpdateTagsDto';

@Controller('api')
export class ApiController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get('/')
  getApiVersion() {
    return {
      version: 1,
      dateTime: new Date().toISOString(),
    };
  }
  
}
