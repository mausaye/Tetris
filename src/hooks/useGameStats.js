import { useState, useCallback } from "react";

const buildGameStats = () => ({
  linesCompleted: 0,
  points: 0
});

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback((lines) => {
    setGameStats((previous) => {
      const points = previous.points + lines * 100;
      const newLinesCompleted = previous.linesCompleted + lines;
      const linesCompleted = newLinesCompleted % 10;

      return {
        linesCompleted,
        points
      };
    }, []);
  }, []);

  return [gameStats, addLinesCleared];
};
