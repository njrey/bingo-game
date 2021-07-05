import { useState } from "react";
import { BoardGrid } from "./BoardGrid";
import { BoardSetup } from "../bingo-game-setup/BoardSetup";

export const BingoGame = () => {
  const [tileList, setTileList] = useState<string[]>([]);

  return (
    <div className="bingo-game">
      <BoardSetup handleTilesTextChange={setTileList} />
      <BoardGrid tileList={tileList} />
    </div>
  );
};
