import SingleProduct from '@/app/Components/SingleProduct';
import fetchAllLaptops from '@/app/services/getAllLaptops';
import ViewGetByIdApi from '@/app/services/ViewGetById';

export async function generateStaticParams() {
    try {
        const products = await fetchAllLaptops();
        return products.map(product => ({
            productId: product._id.toString(),
        }));
    } catch (error) {
        console.error('Error fetching product IDs:', error);
        return [];
    }
}

export default async function SingleProductPage({ params }) {
    const { productId } = params;

    try {
        const response = await ViewGetByIdApi(productId);
        const productData = response.data;

        return <SingleProduct productData={productData} />;
    } catch (error) {
        console.error('Error fetching product data:', error);
        return <div>Error fetching product data.</div>;
    }
}
