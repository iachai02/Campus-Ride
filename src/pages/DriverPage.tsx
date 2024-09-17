import React, { useState, ReactNode, ReactElement } from "react";

const DriverPage = () => {
  const [fullName, setFullName] = useState("");
  const [spots, setSpots] = useState(1);
  const [preferredPassengers, setPreferredPassengers] = useState("");

  const handleDriverSubmit = () => {};

  return (
    <form onSubmit={handleDriverSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <label>Number of Spots:</label>
      <input
        type="number"
        value={spots}
        onChange={(e) => setSpots(Number(e.target.value))}
        min="1"
      />

      <label>Preferred Passengers (optional):</label>
      <input
        type="text"
        value={preferredPassengers}
        onChange={(e) => setPreferredPassengers(e.target.value)}
      />

      <button type="submit">Sign Up as Driver</button>
    </form>
  );
};

export default DriverPage;
