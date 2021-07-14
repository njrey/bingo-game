import Square from "./Square";
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
  return arr;
}

function swapPosition(arr: any[], itemIndex: number, swapIndex: number) {
  return ([arr[swapIndex], arr[itemIndex]] = [arr[itemIndex], arr[swapIndex]]);
}

export const BoardGrid = ({ tileList }: { tileList: string[] }) => {
  const shuffledTileList = shuffle(tileList);

  const freeSpaceIndex = shuffledTileList.indexOf("free space");
  if (freeSpaceIndex >= 0 && freeSpaceIndex !== 12) {
    swapPosition(shuffledTileList, freeSpaceIndex, 12);
  }

  const gameBoard: Array<SquareTile> = shuffledTileList.map((item, index) => ({
    textContent: item,
    boardIndex: index,
  }));

  return (
    <div data-testid="board-grid">
      <div className="grid-board">
        {gameBoard.map((square) => (
          <Square key={square.boardIndex} tileText={square.textContent} />
        ))}
      </div>
    </div>
  );
};
