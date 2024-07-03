import axios from "axios"

class HomepageServices {
    constructor() {
        this.axiosApi = axios.create({
            baseURL: import.meta.env.VITE_SERVER_URL
        })
    }

    getAllCandlesCarousel() { 
        return this.axiosApi.get(`/api`)
    }

}

export default new HomepageServices()