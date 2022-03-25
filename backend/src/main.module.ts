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
        ImageModule,
        MetaDataModule,
        ApiModule
    ],
    controllers: [],
    providers: [],
})
export class MainModule { }
