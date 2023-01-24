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
    return this.props.colors[colorIdx];
  }

  render() {
    let boxes = [];

    for (let i = 0; i < this.props.numBoxes; i++) {
      boxes.push(<ColorBox key={i} color={this.randomColor()} />);
    }

    return <div className="ColorBoxes">{boxes}</div>;
  }
}

export default ColorBoxes;
