import axios from "axios";

export const api = axios.create({
    baseURL: "https://web-production-34a2.up.railway.app/"
})