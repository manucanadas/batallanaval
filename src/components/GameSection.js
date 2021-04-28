import React from 'react';
import "../App.css";
import { Button } from "./Button";
import "./GameSection.css";

function GameSection() {
    return (
        <div>
        <div className="container">
            <div className="grid grid-user"></div>
            <div className="grid grid-computer"></div>
        </div>
        <div className="hidden-info">
            <button id="start">Start Game</button>
            <button id="rotate">Rotate Your Ships</button>
            <h3 id="whose-go">Your Go</h3>
            <h3 id="info"></h3>
        </div>
        <div className="grid-display"></div>
        </div>
        );
}

export default GameSection;
