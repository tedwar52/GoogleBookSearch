import axios from "axios";


const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "&key=AIzaSyCS-oWwGUvrwie8CAlYGHwhbcJQthYvDcQ";

export default {
    apiSearch: function(param) {
        return axios.get(baseURL + param + key);
    }
};
