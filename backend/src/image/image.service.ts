import { Injectable } from "@nestjs/common";
import * as sharp from 'sharp';
import { DatabaseService } from "src/database/database.service";
import ResponseHelper from "src/utils/ResponseHelper";
import { Utils } from "src/utils/Utils";


@Injectable()
export class ImageService {

    constructor(
        private readonly databaseService: DatabaseService,
    ) { }

    generateThumbnail(imageName: string) {
        try {
            const thumbnailName = Utils.thumbnailName(imageName)
            sharp(Utils.getImagePathWithName(imageName), { failOnError: false })
                .resize(200, 200)
                .withMetadata()
                .jpeg({ quality: 60 })
                .toFile(thumbnailName)

            return thumbnailName
        } catch (err) {
            console.log("Error on generating Thumbnail.")
            return err
        }
    }

    searchImage = async (text: string) => {
        try {
            const result = await this.databaseService.search(text);
            result.forEach(item => {
                item.url = Utils.generateUrlForImage(item.picture.originalname)
                item.thumbnail = Utils.generateUrlForThumbnail(item.picture.originalname)
                item.download = Utils.generateDownloadUrl(item.picture.id)
            });
            return ResponseHelper.createSuccess(result);
        } catch (error) {
            return ResponseHelper.createError(
                error,
                'Es ist wohl ein Fehler bei der Suche aufgetreten',
            );
        }
    }

    async getRandomImages() {
        try {
            const result = await this.databaseService.get20Pictures();
            result.forEach(item => {
                item.url = Utils.generateUrlForImage(item.picture.originalname)
                item.thumbnail = Utils.generateUrlForThumbnail(item.picture.originalname)
                item.download = Utils.generateDownloadUrl(item.picture.id)
            });
            return ResponseHelper.createSuccess(result);
        } catch (error) {
            return ResponseHelper.createError(
                error,
                'Es ist ein Fehler aufgetreten',
            );
        }
    }
}