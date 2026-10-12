import axios from "axios";


const apiClient = axios.create({
    baseURL: 'localhost:8082'
})

export { apiClient }