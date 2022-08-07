import axios from "axios";

class AxiosClient {

    private _client

    constructor(private url: string) {
        this._client = axios.create({ baseURL: url })
        this._client.defaults.headers.common['Content-Type'] = 'application/json'
    }

    get client () {
        return this._client
    }
}

const axiosClient = new AxiosClient(process.env.REACT_APP_API_URL as string).client

export { axiosClient }