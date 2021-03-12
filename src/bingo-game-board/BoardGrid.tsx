import { Component } from "react";
import { Square } from "./Square";
import "./BoardGrid.css";

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
      console.log("free!");
      let temp = arr[12];
      arr[12] = "free space";
      arr[freeSpaceIndex] = temp;
    }
    return arr;
  }
  createBoardArray(arr: string[]): string[][] {
    let board: string[][] = [[], [], [], [], []];
    let arrIndex = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        board[i][j] = arr[arrIndex];
        arrIndex++;
      }
    }
    return board;
    // return board.map((boardItem, index) => {
    //   for (let i = 0; i < board.length; i++) {
    //     boardItem[index] = arr[arrIndex];
    //     arrIndex++;
    //   }
    //   return boardItem;
    // });
  }
  render() {
    if (this.props.tileList.length !== 25) {
      return <div>Create a board!</div>;
    }
    let tileText: string[] = this.props.tileList;
    let gameBoard: Array<Array<string>> = this.createBoardArray(
      this.shuffle(this.props.tileList)
    );
    console.log("board");
    console.log(gameBoard);

    for (let i = 0; i < this.props.tileList.length; i++) {
      // console.log(this.props.tileList[i]);
    }

    return (
      <div className="board">
        <h1>Bingo</h1>
        <div className="board-row">
          {gameBoard[0].map((square) => (
            <Square tileText={square} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[1].map((square) => (
            <Square tileText={square} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[2].map((square) => (
            <Square tileText={square} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[3].map((square) => (
            <Square tileText={square} />
          ))}
        </div>
        <div className="board-row">
          {gameBoard[4].map((square) => (
            <Square tileText={square} />
          ))}
        </div>
      </div>
    );
  }
}
