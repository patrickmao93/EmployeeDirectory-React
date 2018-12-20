import React from "react";
import Card from "./Card";
import CardMockup from "./CardMockup";

/**
 * EmployeeList Component
 */
class EmployeeList extends React.Component {
  renderContent = employees => {
    //if search has no match, show "no match found"
    if (this.props.match === 0) {
      return (
        <div className="employee-list__no-match">
          <h2>No Match Found</h2>
        </div>
      );
    }

    if (employees.length === 0) {
      //show loading screen if employee list is not yet fetched
      const cards = [];
      for (let i = 0; i < 9; i++) {
        cards.push(<CardMockup key={`cardMockup${i}`} />);
      }
      return cards;
    } else {
      //render employee list
      const employeeList = employees.map(employee => {
        return (
          <Card
            key={employee.uuid}
            employee={employee}
            onClickCard={this.props.onClickCard}
          />
        );
      });
      return employeeList;
    }
  };
  render() {
    return (
      <div className="employee-list">
        {this.renderContent(this.props.employees)}
      </div>
    );
  }
}

export default EmployeeList;
