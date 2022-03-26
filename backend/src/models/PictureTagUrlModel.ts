import { Picture } from "src/database/entities/Picture";

export default interface PictureTagUrlModel {
    picture: Picture
    tags: string[]
    url?: string
    thumbnail?: string
    download?: string
}