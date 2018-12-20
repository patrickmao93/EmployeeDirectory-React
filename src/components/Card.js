import React from "react";

/**
 * Card Component
 */
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.employeeInfo = props.employee.info;
    this.cardRef = React.createRef();
  }

  componentDidMount = () => {
    this.cardRef.current.addEventListener("click", event => {
      this.props.onClickCard(this.props.employee.uuid);
    });
  };

  render() {
    return (
      <div ref={this.cardRef} className="card">
        <div className="card__thumbnail">
          <img
            className="card__thumbnail__image"
            src={this.employeeInfo.picURL}
            alt={this.employeeInfo.firstName}
          />
        </div>
        <div className="card__info">
          <h2 className="card__info__name">
            {this.employeeInfo.firstName + " " + this.employeeInfo.lastName}
          </h2>
          <span className="card__info__desc">{this.employeeInfo.email}</span>
          <span className="card__info__desc">{this.employeeInfo.city}</span>
        </div>
      </div>
    );
  }
}

export default Card;
