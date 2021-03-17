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
  createBoardArray(arr: string[]): Array<Array<SquareTile>> {
    let board: Array<Array<SquareTile>> = [];
    let arrIndex = 0;
    for (let i = 0; i < 5; i++) {
      board.push([]);
      for (let j = 0; j < 5; j++) {
        let squareTile: SquareTile = {
          textContent: arr[arrIndex],
          boardIndex: arrIndex,
        };
        board[i].push(squareTile);
        arrIndex++;
      }
    }
    return board;
  }
  render() {
    if (this.props.tileList.length !== 25) {
      return <div>Create a board!</div>;
    }
    let gameBoard: Array<
      Array<{ textContent: string; boardIndex: number }>
    > = this.createBoardArray(this.shuffle(this.props.tileList));

    return (
      <div className="board">
        <h1>Bingo</h1>
        <div className="board-row">
          {gameBoard[0].map((square) => (
            <Square key={square.boardIndex} tileText={square.textContent} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[1].map((square) => (
            <Square key={square.boardIndex} tileText={square.textContent} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[2].map((square) => (
            <Square key={square.boardIndex} tileText={square.textContent} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[3].map((square) => (
            <Square key={square.boardIndex} tileText={square.textContent} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[4].map((square) => (
            <Square key={square.boardIndex} tileText={square.textContent} />
          ))}
        </div>
      </div>
    );
  }
}
