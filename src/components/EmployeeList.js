import React from "react";
import Card from "./Card";
import CardMockup from "./CardMockup";

function renderContent(employees) {
  if (employees.match === 0) {
    return (
      <div className="employee-list__no-match">
        <h2>No Match Found</h2>
      </div>
    );
  }

  if (employees.displayedEmployees.length === 0) {
    //show loading screen if employee list is not yet fetched
    const cards = [];
    for (let i = 0; i < 9; i++) {
      cards.push(<CardMockup key={`cardMockup${i}`} />);
    }
    return cards;
  } else {
    //render employee list
    const employeeList = employees.displayedEmployees.map(employee => {
      return <Card key={employee.uuid} employee={employee} />;
    });
    return employeeList;
  }
}

const EmployeeList = props => {
  return <div className="employee-list">{renderContent(props.employees)}</div>;
};

export default EmployeeList;
