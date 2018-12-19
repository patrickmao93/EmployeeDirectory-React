import React from "react";
import NavArrow from "./NavArrow";

class Modal extends React.Component {
  onClick(event) {
    event.stopPropagation();
  }

  renderArrow(orientation) {
    if (orientation === "left" && this.props.selectedIndex > 0) {
      return <NavArrow arrowOrientation="left" onClick={this.props.onClick} />;
    } else if (
      orientation === "right" &&
      this.props.selectedIndex < this.props.length - 1
    ) {
      return <NavArrow arrowOrientation="right" onClick={this.props.onClick} />;
    }
  }

  render() {
    if (this.props.selectedEmployee === null) {
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
