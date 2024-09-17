import React, { useState } from "react";

const PassengerForm = () => {
  const [fullName, setFullName] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [preferredDriver, setPreferredDriver] = useState("");

  const handlePassengerSubmit = () => {};

  return (
    <form onSubmit={handlePassengerSubmit}>
      <label>Full Name:</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label>Pick-up location:</label>
      <input
        type="text"
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />

      <label>Preferred Driver (optional):</label>
      <input
        type="text"
        value={preferredDriver}
        onChange={(e) => setPreferredDriver(e.target.value)}
      />

      <button type="submit">Sign Up as Passenger</button>
    </form>
  );
};

export default PassengerForm;
