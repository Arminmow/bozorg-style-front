import "./Categories.css";

import category1Image from "../../assets/images/category1.jpg";
import category2Image from "../../assets/images/category2.jpg";
import category3Image from "../../assets/images/category3.jpg";

function Categories() {
  return (
    <div className="categories-section">
      <h2 className="categories-title">دسته بندی ها</h2>
      <div className="categories-container d-flex flex-wrap">
        <div className="category-item position-relative">
          <img src={category1Image} alt="Category 1" className="img-fluid" />
          <button className="btn category-btn">کاپشن</button>
        </div>
        <div className="category-item position-relative">
          <img src={category2Image} alt="Category 2" className="img-fluid" />
          <button className="btn category-btn">کلاه</button>
        </div>
        <div className="category-item position-relative">
          <img src={category3Image} alt="Category 3" className="img-fluid" />
          <button className="btn category-btn">کفش</button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
