import { Component } from "react";
import "./Square.css";

export class Square extends Component<
  { tileText: string },
  { occupied: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      occupied: false,
    };
  }
  occupy() {
    this.setState({
      occupied: !this.state.occupied,
    });
  }
  render() {
    let squareOccupied = `square ${
      this.state.occupied ? "occupied" : "unoccupied"
    }`;
    return (
      <div
        tabIndex={0}
        onClick={() => this.occupy()}
        className={squareOccupied}
      >
        {this.props.tileText}
      </div>
    );
  }
}
