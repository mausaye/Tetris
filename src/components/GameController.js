import "./styles/GameController.css"
import { Action, actionForKey, actionIsDrop } from "../logic/input";
import { playerController } from "../logic/PlayerController";

import { useDropTime } from "../hooks/useDropTime";
import { useInterval } from "../hooks/useInterval";
import { useState } from "react";

const GameController = ({
  board,
  gameStats,
  player,
  setGameOver,
  setPlayer
}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({
    gameStats
  });

  const [paused, setPaused] = useState(false)

  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
  };

  const onKeyDown = ({ code }) => {
    const action = actionForKey(code);

    
    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
        setPaused(true);
       
      } else {
        resumeDropTime();
        setPaused(false);
      }
    
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      if (!dropTime) {
        return;
      }
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    });
  };

  return (
    <div>
    {paused ?  <h1>PAUSED</h1> : <div></div>}

    <input
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
    
</div>
    
  );
};

export default GameController;
