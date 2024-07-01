import axios from 'axios';
async function ViewGetByIdApi(id) {
  try {
    const response = await axios.get(`https://laptop-inventory-backend.vercel.app/laptops/${id}`);
    return response;
  } catch (error) {
    console.error('Error viewing laptop:', error);
    throw error;
  }
}

export default ViewGetByIdApi;
