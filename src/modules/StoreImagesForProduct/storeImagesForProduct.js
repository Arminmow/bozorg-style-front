import axiosInstance from "../../api/axios";

const storeImagesForProduct = async (productId, imageUrls) => {
  const API_URL = "/product-images/add"; // Adjust according to your API route

  for (let imageUrl of imageUrls) {
    try {
      const response = await axiosInstance.post(API_URL, {
        product_id: productId,
        image_path: imageUrl,
      });

      if (response.data.success) {
        console.log(`Image added successfully for product ${productId}`);
      }
    } catch (error) {
      console.error(`Error adding image for product ${productId}:`, error);
    }
  }
};

export default storeImagesForProduct;
