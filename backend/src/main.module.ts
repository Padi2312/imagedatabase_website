import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { ApiModule } from './api/api.module';
import { Picture } from './database/entities/Picture';
import { PictureTag } from './database/entities/PictureTag';
import { Tag } from './database/entities/Tag';
import { ImageModule } from './image/image.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '..', 'public'),
            renderPath: path.join(__dirname, '..', 'public')
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'imagedb_database',
            port: 3306,
            username: 'root',
            password: 'mysql',
            database: 'webservice',
            entities: [Picture, PictureTag, Tag]
        }),
        ImageModule,
        ApiModule
    ],
    controllers: [],
    providers: [],
})
export class MainModule { }
