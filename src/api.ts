import axios from 'axios';

//http://localhost:3005/
//https://mastering-backend-648a4cdef801.herokuapp.com/

const Api = axios.create({
	baseURL: "http://localhost:3005/",
});

export default Api;
