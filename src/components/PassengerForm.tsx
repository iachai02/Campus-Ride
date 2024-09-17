import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PassengerForm = () => {
  const [fullName, setFullName] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [preferredDriver, setPreferredDriver] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passengerData = {
      fullName,
      pickupLocation,
      preferredDriver,
    };
    console.log(passengerData); // send this to backend

    navigate("/homepage");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Passenger Sign-Up</h2>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        Pick-up location:
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
      </label>
      <label>
        Preferred Driver (optional):
        <input
          type="text"
          value={preferredDriver}
          onChange={(e) => setPreferredDriver(e.target.value)}
        />
      </label>
      <button type="submit">Sign up as a Passenger</button>
    </form>
  );
};

export default PassengerForm;
