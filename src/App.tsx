import { Component, ChangeEvent } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BingoGame />
    </div>
  );
}
class BingoGame extends Component<{}, { tileList: Array<string> }> {
  constructor(props: any) {
    super(props);
    this.handleTilesTextChange = this.handleTilesTextChange.bind(this);
    this.state = {
      tileList: [],
    };
  }
  handleTilesTextChange(tileTextArr: string[]) {
    this.setState({ tileList: tileTextArr });
  }

  render() {
    return (
      <div className="bingo-game">
        <BoardSetup handleTilesTextChange={this.handleTilesTextChange} />
        <BoardGrid tileList={this.state.tileList} />
      </div>
    );
  }
}
class BoardGrid extends Component<{ tileList: Array<string> }, {}> {
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
class Square extends Component<{ tileText: string }, { occupied: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      occupied: false,
    };
  }
  occupy() {
    console.log(`occupied: ${this.state.occupied}`);
    this.setState({
      occupied: !this.state.occupied,
    });
  }
  render() {
    return (
      <div className="square">
        <div
          onClick={() => this.occupy()}
          className={this.state.occupied ? "occupied" : "unoccupied"}
        >
          {this.props.tileText}
        </div>
      </div>
    );
  }
}
class BoardSetup extends Component<
  { handleTilesTextChange: (tilesTextArr: string[]) => void },
  { tileList: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      tileList: "",
    };
    this.buildBoardText = this.buildBoardText.bind(this);
    this.handleTileTextInput = this.handleTileTextInput.bind(this);
  }

  buildBoardText() {
    const board = this.state.tileList.split(",");
    if (board.length !== 25) {
      alert(`Bad board, board length is ${board.length}, should be 25`);
    } else {
      this.props.handleTilesTextChange(board);
    }
  }

  handleTileTextInput(event: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ tileList: event.target.value });
  }

  render() {
    return (
      <div className="board-setup">
        <h1>Setup</h1>
        <p>Input a comma-separated list for Bingo tiles</p>
        <textarea name="tilesInput" onInput={this.handleTileTextInput} />
        <div>
          <button onClick={this.buildBoardText}>Setup</button>
        </div>
      </div>
    );
  }
}
export default App;
