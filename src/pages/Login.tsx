import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("logging in with", { email, password });
    navigate("/homepage");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <p>
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
