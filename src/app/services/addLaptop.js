import axios from 'axios';

async function addLaptopApi(formData) {
    try {
        const response = await axios.post(`https://laptop-inventory-backend.vercel.app/add-laptop`, formData);
        return response;
    } catch (error) {
        console.error('Error Adding laptop:', error);
        throw error;
    }
}

export default addLaptopApi;
