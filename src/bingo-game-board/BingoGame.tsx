import { useState, useEffect } from "react";
import { BoardGrid } from "./BoardGrid";
import { BoardSetup } from "../bingo-game-setup/BoardSetup";
import BoardList from "../bingo-game-board-list/BoardList";
import "./BingoGame.css";

type Board = {
  name: string;
  squares: string[];
};

export const BingoGame = () => {
  const [tileList, setTileList] = useState<string[]>([]);
  const [boardsList, setBoardsList] = useState<Board[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { tileList, boardsList } = await fetchBoards();
      setTileList(tileList);
      setBoardsList(boardsList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (tileList.length === 25) {
      saveBoards(tileList);
    }
  }, [tileList]);

  return (
    <div className="bingo-game">
      <BoardSetup handleTilesTextChange={setTileList} />
      <div className="boards-container">
        <div>
          <BoardList boards={boardsList}></BoardList>
        </div>
        <BoardGrid tileList={tileList} />
      </div>
    </div>
  );
};

async function fetchBoards(): Promise<{
  tileList: string[];
  boardsList: Board[];
}> {
  const response = await fetch("http://localhost:5000/boards/");
  type JSONResponse = Array<Board>;
  const respJson: JSONResponse = await response.json();
  const boardsList = respJson;
  const boards = boardsList[0];
  let theseBoards: string[] = [];
  if (response.ok) {
    theseBoards = boards && boards ? boards.squares : [];
  }
  return { tileList: theseBoards, boardsList: boardsList };
}

async function saveBoards(boards: string[]): Promise<void> {
  await window.fetch("http://localhost:5000/boards/", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(boards),
  });
}
