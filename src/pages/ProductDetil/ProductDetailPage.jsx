import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./ProductDetailPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/ProductDetail/ProductDetails";
import ProductImages from "../../components/ProductDetail/ProductImages";

function ProductDetailPage() {
  const navigate = useNavigate();
  const product = {
    id: 29,
    name: "ست دورس و شلوار مردانه",
    description: "دارای سایزبندی ۱-۲\r\nدارای رنگبندی",
    price: "899.00",
    image:
      "https://i.ibb.co/M6PMcjk/Snapinsta-app-472451370-968476981821612-5080420139223119414-n-1080.jpg",
    created_at: "2025-01-13T17:20:05.000000Z",
    updated_at: "2025-01-13T17:20:05.000000Z",
    gender: "men",
    category_id: 3,
    images: [
      {
        id: 49,
        product_id: 29,
        image_path:
          "https://i.ibb.co/M6PMcjk/Snapinsta-app-472451370-968476981821612-5080420139223119414-n-1080.jpg",
        created_at: "2025-01-13T17:21:16.000000Z",
        updated_at: "2025-01-13T17:21:16.000000Z",
      },
      {
        id: 50,
        product_id: 29,
        image_path:
          "https://i.ibb.co/fYzXNPT/Snapinsta-app-472452865-561578046696641-4979268328122321400-n-1080.jpg",
        created_at: "2025-01-13T17:21:29.000000Z",
        updated_at: "2025-01-13T17:21:29.000000Z",
      },
      {
        id: 51,
        product_id: 29,
        image_path:
          "https://i.ibb.co/zX0qbJ4/Snapinsta-app-472417138-3452922081506899-3587352676351056830-n-1080.jpg",
        created_at: "2025-01-13T17:21:46.000000Z",
        updated_at: "2025-01-13T17:21:46.000000Z",
      },
      {
        id: 52,
        product_id: 29,
        image_path:
          "https://i.ibb.co/p2LGmjq/Snapinsta-app-472819690-504666982067732-7372002099647636909-n-1080.jpg",
        created_at: "2025-01-13T17:22:05.000000Z",
        updated_at: "2025-01-13T17:22:05.000000Z",
      },
      {
        id: 53,
        product_id: 29,
        image_path:
          "https://i.ibb.co/zSfCds6/Snapinsta-app-472411803-933278818782061-2322707837147050009-n-1080.jpg",
        created_at: "2025-01-13T17:22:05.000000Z",
        updated_at: "2025-01-13T17:22:05.000000Z",
      },
      {
        id: 54,
        product_id: 29,
        image_path:
          "https://i.ibb.co/fCXm5f7/Snapinsta-app-472485934-1691067628419316-2398694616869360972-n-1080.jpg",
        created_at: "2025-01-13T17:22:38.000000Z",
        updated_at: "2025-01-13T17:22:38.000000Z",
      },
    ],
  };
  const [mainImage, setMainImage] = useState(product.images[0]?.image_path);

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
