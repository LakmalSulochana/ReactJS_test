import axios from "axios";
//Base url
const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})
export  default instance;