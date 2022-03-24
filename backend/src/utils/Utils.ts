import { Configuration } from "src/Configuration"

export namespace Utils {

    export const getImagePathWithName = (originalname: string) => {
        return Configuration.imageDir + originalname
    }

    export const thumbnailName = (imageName: string) => {
        return Configuration.thumbnailDir + imageName
    }
}