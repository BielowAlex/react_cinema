import axios from "axios";

import { API_KEY_V4, baseURL} from "../constants";



const axiosService = axios.create({baseURL});
axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${API_KEY_V4}`;
    return config;
})

export {
    axiosService
}