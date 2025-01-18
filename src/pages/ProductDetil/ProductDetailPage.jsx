import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ProductDetailPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/ProductDetail/ProductDetails";
import ProductImages from "../../components/ProductDetail/ProductImages";
import { getProductById } from "../../modules/GetProductById/getProductById";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null); // Initialize mainImage as null
  const { id: productId } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setMainImage(data?.images[0]?.image_path); // Set mainImage after the product is fetched
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Render a loading state while the product is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-detail-container container mt-5 mb-5">
        <div className="row">
          <ProductImages
            images={product.images}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
          <ProductDetails
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={() => alert("Add to Cart Clicked!")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
