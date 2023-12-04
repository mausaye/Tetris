import "./styles/BoardCell.css";

const BoardCell = ({ cell }) => (
  <div className={`BoardCell ${cell.className}`}>
  </div>
);

export default BoardCell;
