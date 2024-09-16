import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <form>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
