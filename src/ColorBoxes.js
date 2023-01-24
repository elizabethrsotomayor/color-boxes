import React, { Component } from "react";
import "./ColorBoxes.css";
import ColorBox from "./ColorBox";

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 16,
    colors: [
      "#03071E",
      "#370617",
      "#6A040F",
      "#9D0208",
      "#D00000",
      "#DC2F02",
      "#E85D04",
      "#F48C06",
      "#FAA307",
      "#FFBA08",
      "#FFF8D6",
      "#FFF0AD",
      "#FFE985",
      "#FFDD47",
      "#FFD61F",
      "#FFD100",
    ],
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    let colorIdx = Math.floor(Math.random() * this.props.colors.length) + 1;
    // console.log(this.props.colors[colorIdx]);

    return this.props.colors[colorIdx];
  }

  render() {
    return (
      <div className="ColorBoxes">
        {Array(this.props.numBoxes).fill(
          <ColorBox color={this.randomColor()} />
        )}
      </div>
    );
  }
}

export default ColorBoxes;
