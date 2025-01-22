import submitProductToAPI from "../AddProduct/addProduct";
import convertImagesToUrls from "../ConvertImagesToUrls/convertImagesToUrls";
import storeImagesForProduct from "../StoreImagesForProduct/storeImagesForProduct";

const submitFullProductToBackend = async (productDetails, selectedImages) => {
  try {
    // Step 1: Submit the product details to the backend
    const productResponse = await submitProductToAPI(productDetails);

    const productId = productResponse.id; // Assuming productResponse has the product info

    // Step 2: Convert images to URLs
    const imageUrls = await convertImagesToUrls(selectedImages);

    // Step 3: Submit the image URLs to associate them with the product
    await storeImagesForProduct(productId, imageUrls);
  } catch (error) {
    console.error("Error submitting product and images:", error.message);
    throw new Error("Failed to submit the full product.");
  }
};

export default submitFullProductToBackend;
