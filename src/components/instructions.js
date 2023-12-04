import './styles/Instructions.css';

const Instructions = ({close}) => {
    return (
    <div className="instructions">
        <div className='container'>
            <div id="menuButton" onClick={close}>Menu</div>
            <h1>How To Play</h1>
            <p id="instr">
                Tetris is a block stacking game where you try and clear as many rows as possible.
                Use arrow keys to move the block around. Press space bar to place blocks.
                The goal of the game is to survive as long as possible without the blocks touching the top of the board.

                Best of luck!
            </p>
        </div>
    </div>
    )
}

export default Instructions;