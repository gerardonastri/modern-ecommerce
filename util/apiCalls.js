import axios from "axios"

const  BASE_URL = "https://modern-ecommerce-lovat.vercel.app/api/";

export const axiosReq = axios.create({
    baseURL:  BASE_URL
})