import axios from 'axios';
async function fetchAllLaptops() {
  try {
    const response = await axios.get("https://laptop-inventory-backend.vercel.app/laptops")
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data at Investments:', error);
  }
}
export default fetchAllLaptops;