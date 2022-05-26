import { ChangeEvent, Dispatch, FunctionComponent, useState } from "react";
import { Board } from "../bingo-game-board/BingoGame";
import "./BoardSetup.css";

export type BoardSetupProps = { boards: Board[] };

export const BoardSetup: FunctionComponent<BoardSetupProps> = ({
  boards,
}: BoardSetupProps) => {
  const [tileList, setTileList] = useState("");
  const [boardName, setBoardName] = useState("");

  const saveBoard = async (board: Board): Promise<void> => {
    await window.fetch("http://localhost:5000/boards/", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(board),
    });
  };
  return (
    <div data-testid="board-setup" className="board-setup">
      <p>Name</p>
      <input
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setBoardName(event.target.value)
        }
        type="text"
      ></input>
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
              saveBoard({ squares: board, name: boardName });
            }
          }}
        >
          Setup
        </button>
      </div>
    </div>
  );
};
