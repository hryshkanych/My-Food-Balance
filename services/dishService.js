import axios from 'axios';

const baseURL = 'http://192.168.3.203:3000/Dishes/';

const getDishes = async () => {
    try {
        const response = await axios.get(baseURL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching dishes: ', error);
        throw error;
    }
}

const getDishById = async (dishId) => {
    try {
        const response = await axios.get(`${baseURL}${dishId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching dish with ID ${dishId}: `, error);
        throw error;
    }
}

const deleteDishById = async (dishId) => {
    try {
        const response = await axios.delete(`${baseURL}${dishId}`);
        console.log(response.data); 
        return response.data;
    } catch (error) {
        console.error(`Error deleting dish with ID ${dishId}: `, error);
        throw error;
    }
}

const deleteAllDishes = async () => {
    try {
        const response = await axios.delete(`${baseURL}deleteAllDishes`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting all dishes: ', error);
        throw error;
    }
};

const addDish = async (newDishData) => {
    try {
        const response = await axios.post(baseURL, newDishData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding new dish: ', error);
        throw error;
    }
};

export { getDishes, getDishById, deleteDishById, deleteAllDishes, addDish };
