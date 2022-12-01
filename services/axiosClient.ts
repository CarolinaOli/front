import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'aplication/json;charset=UTF-8'
axios.defaults.withCredentials = true

const axiosClient = axios.create(
    {
        baseURL: 'https://back2-eight.vercel.app:8000/api',
        timeout: 5000
        // baseURL: 'https://backsistemascreening.herokuapp.com/api'
    }
)

export default axiosClient