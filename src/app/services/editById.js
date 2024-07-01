import axios from 'axios';

async function editById(id) {
    try {
        const response = await axios.put(`https://laptop-inventory-backend.vercel.app/laptops/${id}`);
        return response;
    } catch (error) {
        console.error('Error Adding laptop:', error);
        throw error;
    }
}

export default editById;
