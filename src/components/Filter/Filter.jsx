import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";
import "./Filter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

const FilterComponent = ({ setFilters, filters }) => {
  const [categories, setCategories] = useState([]);
  const [params, setparams] = useState({});
  const [priceDropdown, setPriceDropdown] = useState(false);
  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown);
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

  return (
    <div className="container-fluid bg-light border p-3">
      <form
        onSubmit={handleFilterSubmit}
        className="d-flex flex-wrap align-items-center gap-3"
      >
        {/* Sort By */}
        <div className="flex-grow-1">
          <select
            className="form-select"
            value={filters.sortBy}
            onChange={handleInputChange}
          >
            <option value="" disabled selected>
              مرتب‌ سازی
            </option>
            <option value="price_low_to_high">قیمت: از کم به زیاد</option>
            <option value="price_high_to_low">قیمت: از زیاد به کم</option>
            <option value="newest">جدیدترین</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="جستجو بر اساس نام"
            // value={filters.name}
            onChange={handleInputChange}
          />
        </div>

        {/* Price Range */}
        <div className="flex-grow-1">
          <Dropdown isOpen={priceDropdown} toggle={togglePriceDropdown}>
            <DropdownToggle
              caret
              className="btn btn-secondary w-100 priceRange"
            >
              بازه قیمت
            </DropdownToggle>
            <DropdownMenu className="p-3 w-100">
              <div>
                <label htmlFor="minPrice" className="form-label">
                  حداقل قیمت: <strong>{params.min_price}</strong>
                </label>
                <input
                  type="range"
                  id="min_price"
                  name="min_price"
                  className="form-range"
                  min="0"
                  max="1000"
                  step="10"
                  value={params.min_price}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="form-label">
                  حداکثر قیمت: <strong>{params.max_price}</strong>
                </label>
                <input
                  type="range"
                  id="max_price"
                  name="max_price"
                  className="form-range"
                  min="0"
                  max="1000"
                  step="10"
                  value={params.max_price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-2 text-center">
                <span className="badge bg-primary">
                  Selected Range: {params.min_price} - {params.max_price}
                </span>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* Categories Dropdown */}
        <div className="flex-grow-1">
          <select
            className="form-select"
            // value={filters.category}
            onChange={handleInputChange}
            name="category_id"
          >
            <option value="" disabled selected>
              انتخاب دسته‌بندی
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary">
            اعمال فیلترها
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterComponent;
