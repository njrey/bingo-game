import { useState, useEffect } from "react";
import { BoardGrid } from "./BoardGrid";
import { BoardSetup } from "../bingo-game-setup/BoardSetup";

export const BingoGame = () => {
  const [tileList, setTileList] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBoards();
      setTileList(result);
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
      <BoardGrid tileList={tileList} />
    </div>
  );
};

async function fetchBoards(): Promise<string[]> {
  const response = await fetch("http://localhost:5000/boards");
  type Board = {
    name: string;
    squares: string[];
  };
  type JSONResponse = Array<Board>;
  const respJson: JSONResponse = await response.json();
  const boards = respJson[0];
  let theseBoards: string[] = [];
  if (response.ok) {
    theseBoards = boards && boards ? boards.squares : [];
  }
  return theseBoards;
}

async function saveBoards(boards: string[]): Promise<void> {
  await window.fetch("http://localhost:5000/boards", {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(boards),
  });
}
