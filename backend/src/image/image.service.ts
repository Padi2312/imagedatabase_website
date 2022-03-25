import { Injectable } from "@nestjs/common";
import * as sharp from 'sharp';
import { Utils } from "src/utils/Utils";


@Injectable()
export class ImageService {

    getThumbnailsForSearch() {

    }

    getThumbnail(imageName: string) {
        try {
            const thumbnailName = Utils.thumbnailName(imageName)
            sharp(Utils.getImagePathWithName(imageName))
                .resize(200)
                .jpeg({ quality: 60 })
                .toFile(thumbnailName)

            return thumbnailName
        } catch (err) {
            throw err
        }
    }

}