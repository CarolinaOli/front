import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: 'back2-eight.vercel.app:8000/api',
        // baseURL: 'https://backsistemascreening.herokuapp.com/api'
    }
)

export default axiosClient