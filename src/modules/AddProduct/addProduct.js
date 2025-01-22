import axiosInstance from "../../api/axios";

const submitProductToAPI  = async (productData) => {
  
    try {
      const response = await axiosInstance.post('/products/add', productData);
      
      if (response.data.success) {
        return response.data.product; // The added product object from the backend
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
      throw error; // Rethrow the error for the calling function to handle
    }
  };
  
  export default submitProductToAPI ;