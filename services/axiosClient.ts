import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: 'https://back65mas.herokuapp.com/api',
        // baseURL: 'https://backsistemascreening.herokuapp.com/api'
    }
)

export default axiosClient