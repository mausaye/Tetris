import React from "react";
import "./styles/GameStats.css"

const GameStats = ({ gameStats }) => {
  const { points, linesCompleted } = gameStats;
  return (
    <>
    <div id = "keys">
    <h1>How to play:</h1>
    <p>Q: Quit</p>
    <p>P: Pause</p>
    <p>Space: Drop</p>
    <p>Arrows: Move</p>
    <p>Up Arrow: Rotate</p>
    </div>

    <ul className="GameStats GameStats__right">

      <li>Lines completed: {linesCompleted}</li>
      <li>Points</li>
      <li className="value">{points}</li>
    </ul>
    </>
    
  );
};

export default React.memo(GameStats);
