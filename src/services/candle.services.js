import axios from "axios"

class CandleServices {
    constructor() {
        this.axiosApi = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })
    }

    getAllCandles() { 
        return this.axiosApi.get(`/api/candles`)
    }

    getCandle(candleId) {
        return this.axiosApi.get(`/api/candles/${candleId}`)
    }

    newCandle() {
        return this.axiosApi.post(`/api/candles`)
    }

    deleteCandle(candleId) { 
        return this.axiosApi.delete(`/api/candles/${candleId}`)
    }
}

export default new CandleServices()