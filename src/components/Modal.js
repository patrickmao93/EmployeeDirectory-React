import React from "react";

class Modal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        {/* <div class="icn-close">
          <svg
            className="icn-close"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="#333"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
          </svg>
        </div> */}
        <div className="modal">
          <div className="modal__thumbnail">
            <img src="" alt="" />
          </div>
          <div className="modal__info">
            <h2 className="modal__info__name">qweqwe</h2>
            <span className="modal__info__desc">qwe</span>
            <span className="modal__info__desc">qwe</span>
            <div className="modal__info__divider" />
            <span className="modal__info__desc">qwe</span>
            <span className="modal__info__desc">qwe</span>
            <span className="modal__info__desc">qwe</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
