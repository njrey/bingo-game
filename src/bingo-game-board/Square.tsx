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
