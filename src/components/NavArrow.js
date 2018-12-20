import React from "react";

/**
 * NavArrow Component
 */
class NavArrow extends React.Component {
  renderArrow() {
    if (this.props.arrowOrientation === "left") {
      return (
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="angle-left"
          className="svg-inline--fa fa-angle-left fa-w-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="#404A51"
            className="left-arrow__path"
            d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="angle-right"
          className="svg-inline--fa fa-angle-right fa-w-8"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
        >
          <path
            fill="#404A51"
            className="left-arrow__path"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
          />
        </svg>
      );
    }
  }

  onClick = event => {
    event.stopPropagation(); //prevents clicking on arrow from closing overlay
    this.props.onClick(this.props.arrowOrientation);
  };

  render() {
    return (
      <nav
        className={`${this.props.arrowOrientation}-arrow`}
        onClick={this.onClick}
      >
        {this.renderArrow(this.props.arrowOrientation)}
      </nav>
    );
  }
}

export default NavArrow;
