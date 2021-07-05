import { Square } from "./Square";
import "./BoardGrid.css";

interface SquareTile {
  boardIndex: number;
  textContent: string;
}

function shuffle(arr: Array<any>) {
  let x = arr.length;
  let j = 0;
  let temp = [];

  while (x--) {
    j = Math.floor(Math.random() * (x + 1));
    temp = arr[x];
    arr[x] = arr[j];
    arr[j] = temp;
  }
  let freeSpaceIndex = arr.indexOf("free space");
  if (freeSpaceIndex >= 0) {
    let temp = arr[12];
    arr[12] = "free space";
    arr[freeSpaceIndex] = temp;
  }
  return arr;
}

export const BoardGrid = ({ tileList }: { tileList: string[] }) => {
  let gameBoard: Array<SquareTile> = shuffle(tileList).map((item, index) => ({
    textContent: item,
    boardIndex: index,
  }));

  return (
    <div>
      <h1>Bingo</h1>
      <div className="grid-board">
        {gameBoard.map((square) => (
          <Square key={square.boardIndex} tileText={square.textContent} />
        ))}
      </div>
    </div>
  );
};
