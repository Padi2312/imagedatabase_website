import PictureDto from "./PictureDto"

export default interface PictureTagUrlModel {
    picture: PictureDto
    tags: string[]
    url?: string
    thumbnail?: string
    download?: string
}