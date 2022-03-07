import { Injectable } from "@nestjs/common";
import * as fs from 'fs'
import * as exifr from 'exifr'
import { ChecksumHelper } from "src/utils/ChecksumHelper";


@Injectable()
export class UploadService {

    private pathToImages = __dirname + "/../../files/"

    saveFile(file: Express.Multer.File) {
        let fileName = this.getImageName(file.originalname)
        fs.writeFileSync(fileName, file.buffer)

        let data = fs.readFileSync(fileName)
        console.log(ChecksumHelper.generateChecksum(data));
    }

    saveExifMetaData() { }

    private getImageName(originalname: string) {
        return this.pathToImages + new Date().getTime() + "-" + originalname
    }
}