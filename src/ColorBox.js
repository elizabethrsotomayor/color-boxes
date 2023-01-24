import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  static defaultProps = {
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
    this.state = {
      color: this.props.color,
    };
    this.changeColor = this.changeColor.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    let colorIdx = Math.floor(Math.random() * this.props.colors.length) + 1;
    return this.props.colors[colorIdx];
  }

  changeColor() {
    let curColor = this.props.color;
    let newColor = this.randomColor();

    if (curColor !== newColor) {
      this.setState({ color: newColor });
    }
  }

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.randomColor() }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default ColorBox;
