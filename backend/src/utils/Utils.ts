import { Configuration } from "src/Configuration"

export namespace Utils {

    export const getImagePathWithName = (originalname: string) => {
        return Configuration.imageDir + originalname
    }

    export const thumbnailName = (imageName: string) => {
        return Configuration.thumbnailDir + imageName
    }

    export const generateUrlForImage = (fileName: string) => {
        const encodedFileName = encodeURIComponent(fileName)
        const url =  `http://localhost:8080/images/${encodedFileName}`
        return url
    }

    export const generateUrlForThumbnail = (fileName: string) => {
        const encodedFileName = encodeURIComponent(fileName)
        const url =  `http://localhost:8080/thumbnails/${encodedFileName}`
        return url
    }

    
    export const generateDownloadUrl = (imageId:number) => {
        const url =  `http://localhost:8080/api/image/download/${imageId}`
        return url
    }
}