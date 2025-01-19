import axiosInstance from "../../api/axios";

const getCart = async () => {
  try {
    const response = await axiosInstance.get(`/cart`);
    if (response.data.success) {
      const cart = response.data.cart;

      // Prepare cart items with placeholders for product details
      const preparedItems = cart.items.map((item) => ({
        product_id: item.product_id,
        quantity: item.quantity,
      }));
      console.log(preparedItems);
      
      return preparedItems;
    } else {
      return {
        success: false,
        error: response.data.message || "Failed to fetch cart",
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message || "An error occurred while fetching the cart",
    };
  }
};

export default getCart;
