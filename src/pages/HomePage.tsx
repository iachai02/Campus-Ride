import React, { ReactNode, ReactElement } from "react";
import "../css/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to UCSD Campus Ride</h1>
        <p>
          <span className="special-text">Organize rides to campus events.</span>{" "}
          Sign up as a <strong>driver</strong> or find a ride as a{" "}
          <strong>passenger</strong>!
        </p>
        <div className="landing-buttons">
          <button className="btn btn-driver">Become a Driver</button>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
