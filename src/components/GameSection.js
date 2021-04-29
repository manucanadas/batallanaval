import React from 'react';
import "../App.css";
// import { Button } from "./Button";
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
        <div className="grid-display">
            <div className="ship destroyer-container" draggable="true">
                <div id="destroyer-0"></div>
                <div id="destroyer-1"></div>
            </div>
            <div className="ship submarine-container" draggable="true">
                <div id="submarine-0"></div>
                <div id="submarine-1"></div>
                <div id="submarine-2"></div>
            </div>
            <div className="ship cruiser-container" draggable="true">
                <div id="cruiser-0"></div>
                <div id="cruiser-1"></div>
                <div id="cruiser-2"></div>
            </div>
            <div className="ship battleship-container" draggable="true">
                <div id="battleship-0"></div>
                <div id="battleship-1"></div>
                <div id="battleship-2"></div>
                <div id="battleship-3"></div>
            </div>
            <div className="ship carrier-container" draggable="true">
                <div id="carrier-0"></div>
                <div id="carrier-1"></div>
                <div id="carrier-2"></div>
                <div id="carrier-3"></div>
                <div id="carrier-4"></div>
            </div>
        </div>
        </div>
        );
}

export default GameSection;
