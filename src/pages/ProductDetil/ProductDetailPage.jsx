import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/ProductDetail/ProductDetails";
import ProductImages from "../../components/ProductDetail/ProductImages";
import { getProductById } from "../../modules/GetProductById/getProductById";
import CartContext from "../../contexts/CartContext";
import "./ProductDetailPage.css";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function ProductDetailPage() {
  const { user } = useContext(UserContext);
  const { id: productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null); // Product details
  const [mainImage, setMainImage] = useState(null); // Main product image
  const { cart, addToCart, updateQuantity } = useContext(CartContext); // Cart context
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setMainImage(data?.images[0]?.image_path); // Set initial main image
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  // Determine if the product is already in the cart
  const productInCart = cart?.items?.find(
    (item) => item.product_id === String(productId)
  );

  const handleAddToCart = () => {
    if (!user) {
      alert("لطفاً وارد حساب کاربری خود شوید"); // "Please log in" in Persian
      navigate("/login"); // Redirect to the login page
    } else {
      addToCart(productId, 1);
    }
  };

  // Loading state
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
            product={product}
            productInCart={productInCart}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={(action) => updateQuantity(productId, action)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
