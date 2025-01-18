import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "./ProductDetailPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/ProductDetail/ProductDetails";
import ProductImages from "../../components/ProductDetail/ProductImages";
import { getProductById } from "../../modules/GetProductById/getProductById";
import CartContext from "../../contexts/CartContext";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null); // Initialize mainImage as null
  const { id: productId } = useParams(); // Get the product ID from the URL
  const { cart, addToCart } = useContext(CartContext);

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

  const handleAddToCart = async () => {
    try {
      await addToCart(productId, 1);
      alert("Product added to cart successfully!");
    } catch (error) {
      alert("Failed to add product to cart. Please try again.");
    }
  };

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
            productId={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
