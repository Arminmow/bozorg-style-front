const convertImagesToUrls = async (images) => {
  const uploadedUrls = [];
  const IMGBB_API_KEY = process.env.REACT_APP_IMGBB_API_KEY;

  if (!IMGBB_API_KEY) {
    throw new Error("IMGBB API key is missing!");
  }

  for (const image of images) {
    const formData = new FormData();
    formData.append("key", IMGBB_API_KEY);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData
      );

      if (response.data.success) {
        uploadedUrls.push(response.data.data.url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload one or more images.");
    }
  }

  return uploadedUrls;
};

export default convertImagesToUrls;
