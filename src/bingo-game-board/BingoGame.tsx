import { Component } from "react";
import { BoardGrid } from "./BoardGrid";
import { BoardSetup } from "../bingo-game-setup/BoardSetup";

export class BingoGame extends Component<{}, { tileList: Array<string> }> {
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
