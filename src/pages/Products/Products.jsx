import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProductListing from "../../components/ProductsListing/ProductsListing";
import "./Products.css";

function ProductsPage() {
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
      <ProductListing />
      <Footer />
    </>
  );
}

export default ProductsPage;
