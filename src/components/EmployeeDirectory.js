import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

class EmployeeDirectory extends React.Component {
  state = { displayedEmployees: this.props.employees, match: null };

  filterEmployees = term => {
    //remove space from search term
    const formattedTerm = term
      .trim()
      .split(" ")
      .join("")
      .toLowerCase();

    const employeeList = this.props.employees.filter(employee => {
      const name =
        employee.info.firstName.toLowerCase() +
        employee.info.lastName.toLowerCase();
      return name.includes(formattedTerm);
    });

    this.setState({
      displayedEmployees: employeeList,
      match: employeeList.length
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ displayedEmployees: nextProps.employees });
  }

  render() {
    return (
      <div className="employee-directory">
        <SearchBar onInputChange={this.filterEmployees} />
        <EmployeeList employees={this.state} />
      </div>
    );
  }
}

export default EmployeeDirectory;
