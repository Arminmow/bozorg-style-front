import "./Hero.css";

import menImage from "../../assets/images/men.jpg";
import womenImage from "../../assets/images/women.jpg";

function HeroSection() {
  return (
    <div className="hero-section d-flex flex-column flex-lg-row position-relative">
      {/* Men Section */}
      <div className="hero-image men position-relative">
        <img src={menImage} alt="Men Clothing" className="img-fluid" />
        <button className="btn hero-btn">پوشاک مردانه</button>
      </div>

      {/* Women Section */}
      <div className="hero-image women position-relative">
        <img src={womenImage} alt="Women Clothing" className="img-fluid" />
        <button className="btn hero-btn">پوشاک زنانه</button>
      </div>

      {/* Title */}
      <h1 className="hero-title position-absolute text-center">Bozorg Style</h1>
    </div>
  );
}

export default HeroSection;
