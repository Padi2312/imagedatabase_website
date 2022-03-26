export default class HttpRequester {

    private readonly baseUrl = process.env.REACT_APP_BASEURL

    async get(path: string) {
        const url = this.getUrl(path)
        return fetch(url, { method: "GET" }).then(async (res) => {
            return res.json()
        }).then(result => {
            return result
        })
            .catch(err => {
                throw err
            })
    }


    async post(path: string, data: any) {
        const url = this.getUrl(path)
        return fetch(url, {
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
        const url = this.getUrl(path)
        const data = this.createFormData(files)
        return fetch(url, {
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

    downloadFile = (path: string, fileName: string): Promise<any> => {
        return fetch(path, { method: "GET" }).then(async (res) => {
            return res.blob()
        }).then(blob => {
            var url = window.URL.createObjectURL(blob)
            var a = document.createElement('a')
            a.href = url
            a.download = fileName
            document.body.appendChild(a)
            a.click()
            a.remove()
        }).catch(err => {
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

    private getUrl(path: string) {
        if (process.env.NODE_ENV == "development") {
            return this.baseUrl + path
        }
        else {
            return path
        }
    }

}