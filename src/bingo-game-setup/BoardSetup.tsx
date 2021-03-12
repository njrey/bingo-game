import { Component, ChangeEvent } from "react";

export class BoardSetup extends Component<
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
