import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  // const handleSubmit = (e) => {
  //   console.log("Logging in with:", { username, password });
  //   // try {
  //   //   const response = await axios.post('http://127.0.0.1:8000/register', {
  //   //     name: 'Your Name',
  //   //     email: 'test@example.com',
  //   //     password: 'password',
  //   //   });

  //   //   console.log(response.data); // Check the response
  //   //   alert('Registration successful');
  //   // } catch (err) {
  //   //   console.error(err);
  //   //   alert(err.response?.data?.message || 'Registration failed');
  //   // }
  // };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Login</h2>
        <form >
          <div className="input-group">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="button-group">
            <button  className="login-button">
              Login
            </button>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
