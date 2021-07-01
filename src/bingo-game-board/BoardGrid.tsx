import { Component } from "react";
import { Square } from "./Square";
import "./BoardGrid.css";

interface SquareTile {
  boardIndex: number;
  textContent: string;
}

export class BoardGrid extends Component<{ tileList: Array<string> }, {}> {
  constructor(props: any) {
    super(props);
    this.state = { tileList: [] };
    this.getRandomInt = this.getRandomInt.bind(this);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  shuffle(arr: Array<any>) {
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

  create1dBoardArray(arr: string[]): Array<SquareTile> {
    let board: Array<SquareTile> = [];
    arr.forEach((item, index) =>
      board.push({ textContent: item, boardIndex: index })
    );
    return board;
  }
  render() {
    let gameBoard: Array<SquareTile> = this.create1dBoardArray(
      this.shuffle(this.props.tileList)
    );

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
  }
}
