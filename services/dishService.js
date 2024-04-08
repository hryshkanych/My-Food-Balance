import axios from 'axios';

const getDishes = async () => {
    try {
        const response = await axios.get(`http://192.168.1.105:3000/Dishes/`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching dishes`, error);
        throw error;
    }
}



const deleteDishById = async (dishId) => {
    try {
        const response = await axios.delete(`http://192.168.1.105:3000/Dishes/${dishId}`);
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error(`Error deleting dish with ID ${dishId}:`, error);
        throw error;
    }
}


export { getDishes, deleteDishById };