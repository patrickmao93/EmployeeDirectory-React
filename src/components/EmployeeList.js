import React from "react";
import Card from "./Card";
import CardMockup from "./CardMockup";

function renderContent(employees) {
  if (employees.length === 0) {
    //show loading screen if employee list is not yet fetched
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(<CardMockup key={`cardMockup${i}`} />);
    }
    console.log(cards);
    return cards;
  } else {
    //render employee list
    const employeeList = employees.map(employee => {
      return <Card key={employee.uuid} employee={employee} />;
    });
    return employeeList;
  }
}

const EmployeeList = props => {
  return <div className="employee-list">{renderContent(props.employees)}</div>;
};

export default EmployeeList;
