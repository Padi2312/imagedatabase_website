import { Tag } from './database/entities/Tag';
import { PictureTag } from './database/entities/PictureTag';
import { Picture } from './database/entities/Picture';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ApiModule } from './api/api.module';
import { ImageModule } from './image/image.module';
import { MetaDataModule } from './metadata/metadata.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '..', 'public'),
        }),
        TypeOrmModule.forRoot({
          /* 
            type: 'mysql',
            host: 'mysql.int.parndt.de',
            port: 3306,
            username: 'root',
            password: 'mysql',
            database: 'empstamp',  
            */
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'webservice',
            entities: [Picture, PictureTag, Tag]
        }),
        ImageModule,
        MetaDataModule,
        ApiModule
    ],
    controllers: [],
    providers: [],
})
export class MainModule {}
