import axios from 'axios';

const API_URL = 'http://localhost:3000/Products';

const getProductByName = async (name) => {
    try {
        const response = await axios.get(`http://192.168.1.105:3000/Products/getByName?name=${name}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with name :`, error);
        throw error;
    }
}

export { getProductByName };