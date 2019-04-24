import axios from 'axios';

const api = axios.create({ 
    baseURl: 'https://rocketseat-node.herokuapp.com/api' 
});

export default api;

