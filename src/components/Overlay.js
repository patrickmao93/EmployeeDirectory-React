import React from "react";
/**
 * Overlay Component
 */
class Overlay extends React.Component {
  //State initialization
  state = { display: "hidden" };
  /**
   * @param {string} displayState - the display state of the overlay, default is "hidden"
   */
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
      <div
        className={`overlay ${this.isActive(this.state.display)}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Overlay;
