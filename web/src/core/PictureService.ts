import PictureTagUrlModel from "../models/PictureTagUrlModel";
import ResponseModel from "../models/ResponseModel";
import { SuccessResponse } from "../models/SuccessResponse";
import UpdateChangeableDataDto from "../models/UpdateChangeableDataDto";
import UpdateTagsDto from "../models/UpdateTagsDto";
import HttpRequester from "./HttpRequester";

export default class PictureServie {

    private readonly httpRequester = new HttpRequester()

    getRandomImages = (): Promise<PictureTagUrlModel[]> => {
        return this.httpRequester.get("/api/image/random").then((res: ResponseModel) => {
            if (res.success) {
                const result = (res as SuccessResponse).data
                return (result as unknown as PictureTagUrlModel[])
            }
            else {
                return []
            }
        })
    }

    changeData = (imageId: number, name?: string, artist?: string, usercomment?: string, orientation?: string) => {
    
        const data: UpdateChangeableDataDto = {
            imageId: imageId,
            artist: artist,
            name: name,
            orientation: orientation,
            usercomment: usercomment
        }
        return this.httpRequester.post("/api/image/changedata", data).then((res: ResponseModel) => {
            return res.success
        })
    }

    searchForPictures = (text: string) => {
        const searchText = encodeURIComponent(text)
        return this.httpRequester.get("/api/image/search/" + searchText).then((res: ResponseModel) => {
            if (res.success) {
                const result = (res as SuccessResponse).data
                return (result as unknown as PictureTagUrlModel[])
            }
            else {
                return []
            }
        })
    }


    downloadImage = (downloadUrl: string | undefined, fileName: string | undefined) => {
        if (downloadUrl && fileName)
            return this.httpRequester.downloadFile(downloadUrl, fileName).then((res: ResponseModel) => {

            })
    }

    async changeTagsOfImage(imageId: number, tags: string[]) {
        console.log(tags)
        const data: UpdateTagsDto = {
            id: imageId,
            tags: tags
        }
        return await this.httpRequester.post("/api/image/tags", data).then((res: ResponseModel) => {
            console.log(res)
            return res.success
        })
    }
}