import axios from 'axios';

const centerDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover',
    string: 'valor-de-string-requerido',
    params:{
        api_key:'713d719dffdd2171697f4543a185ffeb',
        language:'es-ES'
    }
});

export default centerDB;

