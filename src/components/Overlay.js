import React from "react";

class Overlay extends React.Component {
  state = { display: "hidden" };

  isActive = displayState => {
    return displayState === "show" ? "overlay--active" : "";
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.display !== prevState.display) {
      return { display: nextProps.display };
    }
    return { display: prevState.display };
  }

  render() {
    return (
      <div className={`overlay ${this.isActive(this.state.display)}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
