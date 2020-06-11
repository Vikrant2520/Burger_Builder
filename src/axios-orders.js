import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-b55b1.firebaseio.com/'
});


export default instance;