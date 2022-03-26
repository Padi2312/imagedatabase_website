import InsertPictureDto from './../Dtos/InsertPictureDto';
import ResponseHelper from './../utils/ResponseHelper';
import { DatabaseService } from './../database/database.service';
import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

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
