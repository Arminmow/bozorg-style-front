import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilterComponent from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductListing from "../../components/ProductsListing/ProductsListing";
import axiosInstance from "../../api/axios";
import "./Products.css";

function ProductsPage() {
  const { gender } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    gender: gender,
  });

  const fetchProducts = async () => {
    try {
      console.log(filters);
      
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
    // Fetch all products on component mount
    fetchProducts();
  }, []);

  useEffect(() => {
    // Function to execute when filters change
    const applyFilters = () => {
      console.log("Filters updated:", filters);
      fetchProducts();
      // Add your logic here, e.g., fetching data with the updated filters
    };

    applyFilters();
  }, [filters]); // Runs whenever 'filters' changes

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
        <h1 className="category-title">مردانه</h1>
        <p className="category-description">
          استایل مردونه خودتو پیدا کن و بدرخش
        </p>
      </div>
      <FilterComponent setFilters={setFilters} filters={filters} />
      <ProductListing products={products} />
      <Footer />
    </>
  );
}

export default ProductsPage;
