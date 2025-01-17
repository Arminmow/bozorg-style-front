import React, { useState } from "react";
import "./LoginForm.css";
import { validateField } from "../../modules/Validate/ValidateField";
import { Link } from "react-router-dom";

const LoginForm = ({onSubmit}) => {

   const [formValues, setFormValues] = useState({
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

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formValues); 
    };

  return (

    <form onSubmit={handleSubmit} className="login-form p-4">

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
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
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
            ورود
          </button>

          <div className="auth-footer">
        <p>
          اکانت ندارید؟ <Link to="/register">ثبت نام کنید </Link>
        </p>
      </div>
        </form>
  );
};

export default LoginForm;
