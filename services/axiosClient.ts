import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: 'https://back2-eight.vercel.app/api',
        // baseURL: 'https://backsistemascreening.herokuapp.com/api'
    }
)

export default axiosClient