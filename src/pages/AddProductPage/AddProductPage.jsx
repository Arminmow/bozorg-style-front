import React, { useState , useEffect } from "react";
import "./AddProductPage.css";
import Navbar from "../../components/Navbar/Navbar";
import axiosInstance from "../../api/axios";

const AddProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    gender: "male",
    category: "1",
    images: [],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
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
              className="form-control"
              id="images"
              name="images"
              onChange={handleFileChange}
              multiple
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
