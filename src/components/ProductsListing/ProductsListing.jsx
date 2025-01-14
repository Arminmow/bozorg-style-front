import React, { useEffect, useState } from "react";
import "./ProductsListing.css";
import axiosInstance from "../../api/axios";

const ProductListing = () => {

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

  console.log(products)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-image-wrapper">
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className="product-image default"
            />
            <img
              src={product.images && product.images[1] ? product.images[1].image_path : ''}
              alt={`Product ${product.id} Hover`}
              className="product-image hover"
            />
          </div>
          <div>{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
