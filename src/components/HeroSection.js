import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
    <div className="hero-container">
      {/* <img src="/images/bs.jpg" /> */}
      <h1>THE BATTLE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            LETS PLAY!
        </Button>
      </div>
    </div>
}

export default HeroSection;
