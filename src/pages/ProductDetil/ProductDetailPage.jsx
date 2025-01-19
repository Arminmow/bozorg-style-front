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
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [productInCart, setProductInCart] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setMainImage(data?.images[0]?.image_path); // Set mainImage after the product is fetched
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };
    setProductInCart(
      cart?.items?.find((item) => item.product_id === String(productId))
    );
    fetchProductDetails();
  }, [productId, cart]);

  // Render a loading state while the product is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(productId, 1); // Add product to cart with quantity 1
  };

  const handleUpdateQuantity = (action) => {
    updateQuantity(productId, action); // Call updateQuantity to handle add/remove actions
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
            productInCart={productInCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
