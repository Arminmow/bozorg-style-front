import React from "react";
import "./Login.css"; // External CSS
import loginImg from '../../assets/images/login.jpg'
import loginImg2 from '../../assets/images/login2.png'
import { Link } from 'react-router-dom';


function LoginPage() {
  return (
    <div className="login-page">
      {/* Form Section */}
      <div className="form-section">
        <div className="logo">
          <Link className="Link" to="/"><h1>بزرگ استایل</h1></Link>
        </div>

        {/* Instruction Text */}
        <div className="login-instruction">
          <p>خوش آمدید . لطفا وارد شوید</p>
        </div>

        <form className="login-form">
          {/* Add your form inputs here */}
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder="رمز" />
          <button type="submit">ورود</button>
        </form>
      </div>

      {/* Image Section */}
      <div className="image-section">
      <picture>
          <source 
            media="(min-width: 768px)" 
            srcSet= {loginImg}
          />
          <source 
            media="(max-width: 767px)" 
            srcSet={loginImg2}
          />
          <img 
            src={loginImg}
            alt="Clothes Image"
          />
        </picture>
      </div>
    </div>
  );
}

export default LoginPage;
