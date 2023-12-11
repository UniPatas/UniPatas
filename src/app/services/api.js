import axios from 'axios' 

//cria conexaão com a api 
const api = axios.create = ({baseURL:'http://localhost:8080', })

export default api;