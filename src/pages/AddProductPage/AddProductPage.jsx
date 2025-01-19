import React, { useState, useEffect } from "react";
import "./AddProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import axiosInstance from "../../api/axios";
import submitFullProductToBackend from "../../modules/SubmitFullProductToBackend/submitFullProductToBackend";
import axios from "axios";

const AddProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    gender: "male",
    category_id: "1",
    images: [],
  });
  const [selectedImages, setSelectedImages] = useState([]);

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

    // Check if the input name is category_id and convert to number
    if (name === "category_id") {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10), // Convert category_id to a number
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiting this data");
    console.log(formData);
    
    
    if (!selectedImages.length) {
      alert("Please select images to upload.");
      return;
    }

    try {
      // Directly pass the formData to the function
      await submitFullProductToBackend(formData, selectedImages);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to add product. Please try again.");
    }
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
              name="name"
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
                  value="men"
                  checked={formData.gender === "men"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Men
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="women"
                  checked={formData.gender === "women"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Women
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
              id="category_id"
              name="category_id"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={parseInt(category.id)}>
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
