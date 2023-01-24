import React, { Component } from "react";
import "./ColorBoxes.css";
import ColorBox from "./ColorBox";

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 16,
  };

  render() {
    let boxes = [];

    for (let i = 0; i < this.props.numBoxes; i++) {
      boxes.push(<ColorBox key={i} />);
    }

    return <div className="ColorBoxes">{boxes}</div>;
  }
}

export default ColorBoxes;
