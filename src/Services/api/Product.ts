import axios from "axios";
import endPoints from '@/Services/api/index';

const addProduct = async (body: any) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.post(endPoints.products.addProducts, body, config);
    return response.data;
};

const deleteProduct = async (id: string) => {
    const response = await axios.delete(endPoints.products.deleteProduct(id));
    return response.data;
};

const updateProduct = async (id: string, body: any) => {
    const config = {
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json',
        },
    };
    const response = await axios.put(endPoints.products.updateProducts(id), body, config);
    return response.data;
};

export { addProduct, deleteProduct, updateProduct };
