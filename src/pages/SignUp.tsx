import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";

const SignUp: React.FC = () => {
  // manage form's state
  // formData holds the values of name, email, password
  // setFormData is a function that allows you to update the formData from the user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // navigates to different routes, navigates to login page
  const navigate = useNavigate();

  // function triggered once the user types in one of the fields
  // updates the fields given e.target.value which is the current value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // function is triggered once form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    navigate("./login");
  };
  return (
    <div className="sign-up-page">
      <h1>CampusRide</h1>
      <div className="sign-up-box">
        <form>
          <h2>Create a CampusRide account</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
