import React from "react";

const Card = props => {
  const employeeInfo = props.employee.info;
  return (
    <div className="card">
      <div className="card__thumbnail">
        <img
          className="card__thumbnail__image"
          src={employeeInfo.picURL}
          alt={employeeInfo.firstName}
        />
      </div>
      <div className="card__info">
        <h2 className="card__info__name">
          {employeeInfo.firstName + " " + employeeInfo.lastName}
        </h2>
        <span className="card__info__desc">{employeeInfo.email}</span>
        <span className="card__info__desc">{employeeInfo.city}</span>
      </div>
    </div>
  );
};

export default Card;
