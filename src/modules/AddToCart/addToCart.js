import axiosInstance from "../../api/axios";

export const addToCart = async (productId, quantity = 1) => {
    try {
      const response = await axiosInstance.post(`/cart/add`, {
        product_id: productId,
        quantity, // Send only necessary parameters
      });
      return response.data;
    } catch (error) {
      console.error("Error adding product to cart", error);
      throw error;
    }
  };
