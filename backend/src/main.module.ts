import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';
import * as path from 'path'

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '..', 'public'),
        }),
        /*TypeOrmModule.forRoot({
           
            type: 'mysql',
            host: 'mysql.int.parndt.de',
            port: 3306,
            username: 'root',
            password: 'mysql',
            database: 'empstamp',  
            
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'webservice',
            entities: []
        }),*/
        UploadModule
    ],
    controllers: [],
    providers: [],
})
export class MainModule { }
