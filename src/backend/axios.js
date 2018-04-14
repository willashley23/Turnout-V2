import axios from 'axios'

const API_URL = process.env.API_URL || 'http://localhost:8081/'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})

// format response data to avoid having to use try/catch blocks with async/await
instance.interceptors.response.use(data => {
  return [data, null];
}, error => {
  return [null, error.response.data.error || "server error"];
});

export default instance;