import axios from 'axios';

const apiGet = axios.get("http://localhost:3308/denuncias",{
    params: {
        codigo: ''
    }
})

export default apiGet