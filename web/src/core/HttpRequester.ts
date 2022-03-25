export default class HttpRequester {

    private readonly baseUrl = process.env.REACT_APP_BASEURL

    async get(path: string) {
        const url = this.baseUrl + path
        await fetch(url, { method: "GET" }).then(res => {
            return res.json()
        }).then(res => {
            return res
        })
            .catch(err => {
                throw err
            })
    }


    async post(path: string, data: any) {
        const url = this.baseUrl + path
        return await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({ data }),
        }).then(res => {
            return res.json()
        }).then(res => {
            return res
        })
            .catch(err => {
                throw err
            })
    }

    async uploadFile(path: string, files: FileList): Promise<any> {
        const url = this.baseUrl + path
        const data = this.createFormData(files)
        return await fetch(url, {
            method: "POST",
            body: data,
        }).then(res => {
            return res.json()
        }).then(res => {
            return res
        })
            .catch(err => {
                throw err
            })
    }

    private createFormData = (fileList: FileList) => {
        if (fileList === null)
            return

        let formData = new FormData()
        for (let index = 0; index < fileList.length; index++) {
            const element = fileList[index];
            formData.append("image", element)

        }
        return formData
    }

}