import axios from 'axios';

const Api = axios.create({
	baseURL: "https://mastering-backend-648a4cdef801.herokuapp.com/",
});

export default Api;
