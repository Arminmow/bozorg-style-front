import React from "react";
import "./Login.css"; // External CSS
import loginImg from '../../assets/images/login.jpg'
import loginImg2 from '../../assets/images/login2.png'
import { Link } from 'react-router-dom';
import axios from "axios";


function LoginPage() {

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Logging in with:");
    await getCsrfToken();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: 'Your Name',
        email: 'test@example.com',
        password: 'password',
      });

      console.log(response.data); // Check the response
      alert('Registration successful');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  const getCsrfToken = async (e) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
      console.log(response);
      
      return response;
    } catch (error) {
      console.error('Failed to fetch CSRF token', error);
    }
  };

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

        <form onSubmit={handleSubmit} className="login-form">
          {/* Add your form inputs here */}
          <input type="text" placeholder="نام کاربری" />
          <input type="password" placeholder="رمز" />
          <button type="submit">ورود/ ثبت نام</button>
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
