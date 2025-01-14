import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import "./Filter.css";

const FilterComponent = ({ setFilteredProducts }) => {
  const [categories, setCategories] = useState([]);

  const [filters, setFilters] = useState({
    name: "",
    min_price: "",
    max_price: "",
    category: "",
  });

  const [isCollapsed, setIsCollapsed] = useState(false); // For handling collapsible filter

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
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = "products"; // Default URL
      
      // Fetch filtered products based on the selected filters
      const params = {};

      // Add parameters conditionally if they exist
      if (filters.name) {
        params.name = filters.name;
      }
      if (filters.min_price) {
        params.min_price = filters.min_price;
      }
      if (filters.max_price) {
        params.max_price = filters.max_price;
      }
      if (filters.category) {
        params.category_id = filters.category;
      }

      const response = await axiosInstance.get(url, {
        params,
      });
      console.log(response);

      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle the collapse state
  };

  return (
    <div className="filter-container">
      <button className="collapse-btn" onClick={toggleCollapse}>
        {isCollapsed ? "Show Filters" : "Hide Filters"}
      </button>

      {!isCollapsed && (
        <form onSubmit={handleFilterSubmit} className="filter-form">
          <div className="filter-item">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
              placeholder="Search by name"
            />
          </div>

          <div className="filter-item">
            <label htmlFor="min_price">Min Price</label>
            <input
              type="number"
              id="min_price"
              name="min_price"
              value={filters.min_price}
              onChange={handleInputChange}
              placeholder="Min price"
            />
          </div>

          <div className="filter-item">
            <label htmlFor="max_price">Max Price</label>
            <input
              type="number"
              id="max_price"
              name="max_price"
              value={filters.max_price}
              onChange={handleInputChange}
              placeholder="Max price"
            />
          </div>

          <div className="filter-item">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleInputChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <button type="submit" className="filter-btn">
              Apply Filters
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterComponent;
