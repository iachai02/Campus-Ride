import React, { useState, ReactNode, ReactElement } from "react";
import DriverPage from "./DriverPage";
import PassengerPage from "./PassengerPage";

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

      {role == "driver" && <DriverPage />}
      {role == "passenger" && <PassengerPage />}
    </div>
  );
};

export default SignUpPage;
