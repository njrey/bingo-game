import { useState } from "react";
import "./Square.css";

export const Square = ({ ...props }) => {
  const { tileText } = props;
  const [occupied, setOccupied] = useState(false);

  let squareOccupied = `square ${occupied ? "occupied" : "unoccupied"}`;
  return (
    <div
      tabIndex={0}
      onClick={() => setOccupied(!occupied)}
      className={squareOccupied}
    >
      {tileText}
    </div>
  );
};
