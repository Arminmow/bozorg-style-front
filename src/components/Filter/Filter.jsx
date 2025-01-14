import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import "./Filter.css";

const FilterComponent = ({ setFilters, filters }) => {
  const [categories, setCategories] = useState([]);
  const [params, setparams] = useState({});

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
    setparams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();

    setFilters((prevFilters) => ({
      ...prevFilters, // Keep existing filters
      ...params, // Add or override with new parameters
    }));
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
            //   value={filters.name}
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
            //   value={filters.min_price}
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
            //   value={filters.max_price}
              onChange={handleInputChange}
              placeholder="Max price"
            />
          </div>

          <div className="filter-item">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category_id"
            //   value={filters.category}
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
