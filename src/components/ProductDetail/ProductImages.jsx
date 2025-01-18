import React from "react";

function ProductImages({ images, mainImage, setMainImage }) {
  return (
    <div className="col-md-6 d-flex mb-5">
      {/* Thumbnails */}
      <div className="thumbnails me-3">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.image_path}
            alt={`Thumbnail ${image.id}`}
            className={`thumbnail-img ${
              mainImage === image.image_path ? "active" : ""
            }`}
            onClick={() => setMainImage(image.image_path)}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="main-image">
        <img src={mainImage} alt="Main Product" className="main-img" />
      </div>
    </div>
  );
}

export default ProductImages;
