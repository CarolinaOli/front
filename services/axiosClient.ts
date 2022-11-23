import axios from "axios";

const axiosClient = axios.create(
    {
        baseURL: 'https://front65mas.herokuapp.com/',
        // baseURL: 'https://backsistemascreening.herokuapp.com/api'
    }
)

export default axiosClient