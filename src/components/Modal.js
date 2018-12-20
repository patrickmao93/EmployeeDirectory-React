import React from "react";
import NavArrow from "./NavArrow";

class Modal extends React.Component {
  //when user clicks inside modal, stop overlay from closing
  onClick(event) {
    event.stopPropagation();
  }

  /**
   * Renders arrow base on input orientation and whether the current selected index is 0 or last
   * @param {string} orientation - orientation of arrow, "left" or "right"
   */
  renderArrow(orientation) {
    if (orientation === "left" && this.props.selectedIndex > 0) {
      // don't show left arrow if it's the first item in list
      return <NavArrow arrowOrientation="left" onClick={this.props.onClick} />;
    } else if (
      orientation === "right" &&
      this.props.selectedIndex < this.props.length - 1
    ) {
      // don't show right arrow if it's the last item in list
      return <NavArrow arrowOrientation="right" onClick={this.props.onClick} />;
    }
  }

  render() {
    if (this.props.selectedEmployee === null) {
      //if no employee selected, return null
      return null;
    }
    const selectedEmployee = this.props.selectedEmployee.info;
    return (
      <div className="modal-wrapper">
        <div className="modal" onClick={this.onClick}>
          <div className="modal__thumbnail">
            <img
              src={selectedEmployee.picURL}
              alt={selectedEmployee.firstName}
            />
          </div>
          <div className="modal__info">
            <h2 className="modal__info__name">
              {selectedEmployee.firstName + " " + selectedEmployee.lastName}
            </h2>
            <span className="modal__info__desc">{selectedEmployee.email}</span>
            <span className="modal__info__desc">{selectedEmployee.city}</span>
            <div className="modal__info__divider" />
            <span className="modal__info__desc">{selectedEmployee.phone}</span>
            <span className="modal__info__desc">
              {selectedEmployee.address}
            </span>
            <span className="modal__info__desc">
              Birthday: {selectedEmployee.birthday}
            </span>
          </div>
        </div>
        {this.renderArrow("left")}
        {this.renderArrow("right")}
      </div>
    );
  }
}

export default Modal;
