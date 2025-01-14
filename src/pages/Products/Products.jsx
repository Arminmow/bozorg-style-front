import React, { useEffect, useState } from "react";
import FilterComponent from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductListing from "../../components/ProductsListing/ProductsListing";
import axiosInstance from "../../api/axios";
import "./Products.css";

function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all products on component mount
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("products/men");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      <FilterComponent setFilteredProducts={setProducts}/>
      <ProductListing products={products} />
      <Footer />
    </>
  );
}

export default ProductsPage;
