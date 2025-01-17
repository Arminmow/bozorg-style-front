import React, { useState } from "react";
import "./AuthPage.css"; // External CSS
import loginImg from "../../assets/images/login.jpg";
import loginImg2 from "../../assets/images/login2.png";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axios";
import RegisterForm from "../../components/Register/RegisterForm";
import LoginForm from "../../components/Login/LoginForm";
import { useLocation } from "react-router-dom";

function AuthPage() {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  const handleSubmit = async (formValues) => {
    try {
      const response = await axiosInstance.post("/register", {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
      });

      console.log(response.data);

      const { token } = response.data;

      // Store the JWT token securely
      localStorage.setItem("jwtToken", token);
      window.location.href = "/";

      alert("Registration successful");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="login-page">
      {/* Form Section */}
      <div className="form-section">
        <div className="logo">
          <Link className="Link" to="/">
            <h1>بزرگ استایل</h1>
          </Link>
        </div>

        {/* Instruction Text */}
        <div className="login-instruction">
          <p>{isRegisterPage ? "خوش آمدید . لطفا ثبت نام کنید " : "خوش آمدید. لطفا وارد شوید"}</p>
        </div>
        {isRegisterPage && <RegisterForm onSubmit={handleSubmit} />}
        {isLoginPage && <LoginForm onSubmit={handleSubmit} />}
      </div>

      {/* Image Section */}
      <div className="image-section">
        <picture>
          <source media="(min-width: 768px)" srcSet={loginImg} />
          <source media="(max-width: 767px)" srcSet={loginImg2} />
          <img src={loginImg} alt="Clothes Image" />
        </picture>
      </div>
    </div>
  );
}

export default AuthPage;
