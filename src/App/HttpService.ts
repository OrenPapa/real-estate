import { Axios } from "./Axios"


class HTTPService {
    get(url: string, urlData?: object) {
        return Axios.get(url)
    }

    post(url: string, urlData: object) {
        return Axios.post(url, urlData)
    }

    put(url: string, urlData: object) {
        return Axios.put(url, urlData)
    }

    delete(url: string, urlData: object) {
        return Axios.put(url, urlData)
    }

    patch(url: string, urlData: object) {
        return Axios.patch(url, urlData)
    }

    // async all(promises: Promise<AxiosResponse<any, any>>[]) {
    //     return axios.all(promises)
    // }
}

export default new HTTPService()
