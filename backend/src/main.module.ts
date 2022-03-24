import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './upload/upload.module';

@Module({
    imports: [ 
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
            entities: []
        }),
        UploadModule
    ],
    controllers: [],
    providers: [],
})
export class MainModule { }
