import React, { ReactNode, ReactElement } from "react";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to UCSD Campus Ride</h1>
      <p>
        <span className="special-text">Organize rides to campus events.</span>{" "}
        Sign up as a <strong>driver</strong> or find a ride as a{" "}
        <strong>passenger</strong>!
      </p>
      <div className="landing-buttons">
        <button className="btn btn-driver">Become a Driver</button>
        <button className="btn btn-passenger">Need a Ride</button>
      </div>
    </div>
  );
}

export default HomePage;
