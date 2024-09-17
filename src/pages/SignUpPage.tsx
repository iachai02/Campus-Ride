import React, { useState, ReactNode, ReactElement } from "react";
import DriverForm from "../components/DriverForm";
import PassengerForm from "../components/PassengerForm";

const SignUpPage = () => {
  const [role, setRole] = useState("");

  return (
    <div>
      <h1>Sign Up</h1>
      <label>Select Role:</label>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">--Select Role--</option>
        <option value="driver">Driver</option>
        <option value="passenger">Passenger</option>
      </select>

      {role == "driver" && <DriverForm />}
      {role == "passenger" && <PassengerForm />}
    </div>
  );
};

export default SignUpPage;
