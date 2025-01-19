import React, { useState, useEffect } from "react";
import "./AddProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import axiosInstance from "../../api/axios";
import axios from "axios";

const AddProductPage = () => {
  const IMGBB_API_KEY = process.env.REACT_APP_IMGBB_API_KEY;
  console.log(IMGBB_API_KEY);
  
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    gender: "male",
    category: "1",
    images: [],
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadUrls, setUploadUrls] = useState([]);

  useEffect(() => {
    // Fetch categories for the filter
    axiosInstance
      .get("categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: [...formData.images, ...e.target.files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    if (!selectedImages.length) {
      alert("Please select images to upload.");
      return;
    }

    // Upload images
    const urls = await uploadImages();
    setUploadUrls(urls);

    console.log("Uploaded image URLs:", urls);
  };

  const uploadImages = async () => {
    const uploadedUrls = [];
    const IMGBB_API_KEY = "bef67ffa7c4d506ef0a52bcd602c8643";

    for (let image of selectedImages) {
      const formData = new FormData();
      formData.append("key", IMGBB_API_KEY); // Append the API key
      formData.append("image", image); // Append the image file

      try {
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData
        );
        console.log(response);

        if (response.data.success) {
          uploadedUrls.push(response.data.data.url); // Collect the uploaded image URL
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    return uploadedUrls; // Return all uploaded image URLs
  };

  return (
    <>
      <Navbar />
      <div className="add-product-page container">
        <h2 className="text-center">Add Product</h2>
        <form onSubmit={handleSubmit} className="form-responsive">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="images" className="form-label">
              Upload Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setSelectedImages(e.target.files)}
            />
            {formData.images.length > 0 && (
              <div className="image-preview mt-3">
                {Array.from(formData.images).map((file, index) => (
                  <p key={index} className="text-truncate">
                    {file.name}
                  </p>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="btn w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProductPage;
