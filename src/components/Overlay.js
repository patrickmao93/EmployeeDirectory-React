import React from "react";

class Overlay extends React.Component {
  state = { display: "none" };

  setDisplay = displayState => {
    this.setState({ display: displayState });
  };

  isActive = displayState => {
    return displayState === "display" ? "overlay--active" : "overlay--hidden";
  };

  render() {
    return (
      <div className={`overlay ${this.isActive(this.state.display)}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
