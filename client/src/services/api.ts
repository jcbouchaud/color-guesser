import axios from 'axios';

const api = {
    fetchResults: async () => {
    const URL = 'http://localhost:8000/results/';
    return await axios.get(URL)
        .then((res) => res)
        .catch((err) => err)
    }
}
export default api;