import { useState } from "react";
import { Board } from "./bingo-game-board/BingoGame";

export type BoardListProps = {
  boards: Board[];
  setTiles: Function;
};

const BoardList = ({ ...props }) => {
  const { boards, setTiles } = props;
  const [selectedBoard, setSelectedBoard] = useState<string>("");

  const setSelectedBoardAndTiles = (board: Board) => {
    setTiles(board.squares);
    setSelectedBoard(board.name);
  };

  return (
    <div>
      <h1>{selectedBoard}</h1>
      {boards.map((board: any, index: number) => {
        return (
          <div key={board.id}>
            <div onClick={() => setSelectedBoardAndTiles(board)}>
              {index + 1}. {board.name}
            </div>
            <span onClick={() => deleteBoard(board.id)}>Delete</span>
          </div>
        );
      })}
    </div>
  );
};

async function deleteBoard(id?: string): Promise<any> {
  await fetch(`http://localhost:5000/boards/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
  // TODO: Handle the response
}
export default BoardList;
