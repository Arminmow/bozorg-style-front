import axiosInstance from "../../api/axios";

export const removeFromCartAPI = async (productId) => {
    try {
      await axiosInstance.post("/cart/remove", { product_id: productId });
    } catch (error) {
      console.error("Error removing product from cart", error);
    }
  };
  