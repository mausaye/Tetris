export const Action = {
    Left: "Left",
    FastDrop: "FastDrop",
    Pause: "Pause",
    Quit: "Quit",
    Right: "Right",
    Rotate: "Rotate",
    SlowDrop: "SlowDrop",
    Drop: "Drop"
  };
  
  export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.Drop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
  };
  
  export const actionIsDrop = (action) =>
    [Action.SlowDrop, Action.FastDrop].includes(action);
  
  export const actionForKey = (keyCode) => Key[keyCode];
  