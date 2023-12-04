import { useState, useCallback } from 'react';
import './styles/Menu.css';
import Instructions from './instructions.js';

const Menu = ({ onClick }) => {
    const [openInstructions, setOpen] = useState(false);
    
    const open = useCallback(() => {
        setOpen(true);
    });

    const close = useCallback(() => {
        setOpen(false);
    });
    
    return (
    openInstructions ? <Instructions close={close}/> : 
    
    <div className="menu">
    <div className="floating" id="title">Tetris</div>
    <button className="button" id="play" onClick={onClick}>
        play
    </button>
    <button className="button" id="instructions"onClick={open}>
        instructions
    </button>
</div> 

    )
}

export default Menu;