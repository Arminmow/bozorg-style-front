import axiosInstance from "../../api/axios";

export const getProductById = async (id) => {
    try {
      const response = await axiosInstance.get(`products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details", error);
      throw error;
    }
  };