import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterComponent from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductListing from "../../components/ProductsListing/ProductsListing";
import axiosInstance from "../../api/axios";
import "./Products.css";
import { generateProductPageInfo } from "../../modules/GenerateProductPageInfo/generateProductPageInfo";

function ProductsPage() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const { title, description } = generateProductPageInfo(location);
  
  // Function to get the query parameters from the URL
  const getQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      gender: params.get("gender"),
      category_id: params.get("category_id"),
    };
  };

  // Fetch products based on filters
  const fetchProducts = async (filters) => {
    try {

      const response = await axiosInstance.get("products", {
        params: filters,
      });

      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products.");
      setLoading(false);
    }
  };

  useEffect(() => {
    // Get query params from URL and set filters
    const { gender, category_id } = getQueryParams(location.search);
    const updatedFilters = {};

    if (gender) updatedFilters.gender = gender;
    if (category_id) updatedFilters.category_id = category_id;

    setFilters(updatedFilters);  // This will trigger fetchProducts when filters change
  }, [location.search]);  // Only run when URL changes

  useEffect(() => {
    if (filters.gender || filters.category_id) {
      fetchProducts(filters);  // Fetch products only when filters are updated
    }
  }, [filters]);  // This will run every time filters change

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar />
      {/* Header section for the category */}
      <div className="category-header">
        <h1 className="category-title">{title}</h1>
        <p className="category-description">{description}</p>
      </div>
      <FilterComponent setFilters={setFilters} filters={filters} />
      <ProductListing products={products} />
      <Footer />
    </>
  );
}

export default ProductsPage;
