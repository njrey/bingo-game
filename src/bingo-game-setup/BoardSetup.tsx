import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import "./BoardSetup.css";

export const BoardSetup = ({
  handleTilesTextChange,
}: {
  handleTilesTextChange: Dispatch<SetStateAction<string[]>>;
}) => {
  const [tileList, setTileList] = useState("");
  return (
    <div data-testid="board-setup" className="board-setup">
      <p>Input a comma-separated list for Bingo tiles</p>
      <textarea
        name="tilesInput"
        onInput={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setTileList(event.target.value)
        }
      />
      <div>
        <button
          data-testid="setup-btn"
          onClick={() => {
            const board = tileList.split(",").map((tile) => tile.trim());
            if (board.length !== 25) {
              alert(`Bad board, board length is ${board.length}, should be 25`);
            } else {
              handleTilesTextChange(board);
            }
          }}
        >
          Setup
        </button>
      </div>
    </div>
  );
};
