import React, { useState } from "react";

const DriverForm = () => {
  const [fullName, setFullName] = useState("");
  const [spots, setSpots] = useState(1);
  const [preferredPassengers, setPreferredPassengers] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const driverData = {
      fullName,
      spots,
      preferredPassengers: preferredPassengers
        .split(",")
        .map((name) => name.trim()),
      location,
    };
    console.log(driverData); // send this data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Driver Sign-Up</h2>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label>
        Number of Spots in Car:
        <input
          type="number"
          value={spots}
          onChange={(e) => setSpots(e.target.valueAsNumber)}
          min="1"
        />
      </label>
      <label>
        Preferred Passengers (comma separate):
        <input
          type="text"
          value={preferredPassengers}
          onChange={(e) => setPreferredPassengers(e.target.value)}
          placeholder="Immanuel Chai, Hannah Chai, etc."
        />
      </label>
      <label>
        Starting location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your starting location/where you are from"
        />
      </label>
      <button type="submit">Sign Up as Driver</button>
    </form>
  );
};

export default DriverForm;
