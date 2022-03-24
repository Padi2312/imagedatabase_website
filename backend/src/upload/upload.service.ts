import { Injectable } from "@nestjs/common";
import exifr from 'exifr';
import * as fs from 'fs';
import { Configuration } from "src/Configuration";
import { ProviderService } from "src/provider/provider.service";
import ResponseHelper from "src/utils/ResponseHelper";
import { Utils } from "src/utils/Utils";


@Injectable()
export class UploadService {

    constructor(private readonly providerService: ProviderService) {
        this.createDir();
    }

    saveFile(file: Express.Multer.File) {
        try {
            const originalName = file.originalname
            const imagePath = Utils.getImagePathWithName(originalName)

            fs.writeFileSync(imagePath, file.buffer)
            this.saveExifMetaData(imagePath)
            this.providerService.getThumbnail(originalName)
            
            return ResponseHelper.createSuccess()
        } catch (err) {
            return ResponseHelper.createError(err, "Could not upload file.")
        }
    }

    private saveExifMetaData(fileName: string) {
        exifr.parse(fileName).then(res => {
            //console.log(res);
            // TODO: Insert data into database
        })
    }

    private createDir() {
        if (!fs.existsSync(Configuration.imageDir)) {
            fs.mkdirSync(Configuration.imageDir);
        }
    }
}