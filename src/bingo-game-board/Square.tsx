import { useState } from "react";
import "./Square.css";

const Square = ({ ...props }) => {
  const { tileText } = props;
  const [occupied, setOccupied] = useState(false);

  return (
    <div
      data-testid="square-tile"
      tabIndex={0}
      onClick={() => setOccupied(!occupied)}
      className={`square ${occupied && "occupied"}`}
    >
      {tileText}
    </div>
  );
};
export default Square;
