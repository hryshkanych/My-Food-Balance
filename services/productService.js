import axios from 'axios';

const API_URL = 'http://192.168.1.106:3000/Products/';

const getProductByName = async (name) => {
    try {
        const response = await axios.get(`${API_URL}getByName?name=${name}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with name ${name}`, error);
        throw error;
    }
}

export { getProductByName };
