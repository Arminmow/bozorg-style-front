import React from "react";
import "./ProductsListing.css";

// Function to generate fake products
const generateFakeProducts = () => {
  const products = [];
  for (let i = 1; i <= 40; i++) {
    products.push({
      id: i,
      image: `https://i.ibb.co/3F5hdYp/Snapinsta-app-470083965-370741172767472-7700122896393507206-n-1080.jpg`, // Default image
      hoverImage: `https://i.ibb.co/sQzGrwM/Snapinsta-app-470273645-888491010121118-9106333574942303522-n-1080.jpg`, // Hover image
      description: `ایتم ${i} - یک ایتم باور نکردنی`, // Random description
      price: `${(Math.random() * 100 + 10).toFixed(2)}T`, // Random price between $10 and $110
    });
  }
  return products;
};

const ProductListing = () => {
  const products = generateFakeProducts();

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
              src={product.hoverImage}
              alt={`Product ${product.id} Hover`}
              className="product-image hover"
            />
          </div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
