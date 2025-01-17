import React, { useState } from "react";
import "./RegisterForm.css";
import { validateField } from "../../modules/Validate/ValidateField";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const isFormInvalid =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(formValues).some((value) => value === "");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="login-form p-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          نام کاربری
        </label>
        <input
          id="name"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="نام کاربری"
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          ایمیل
        </label>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          value={formValues.email}
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="ایمیل"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          رمز عبور
        </label>
        <input
          id="password"
          name="password"
          onChange={handleInputChange}
          value={formValues.password}
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="رمز عبور"
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={isFormInvalid}
      >
        ثبت نام
      </button>
      <div className="auth-footer">
        <p>
          اکانت دارید؟ <Link to="/login">وارد شوید</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
