import React from "react";
import { Employee } from "../models/Employee";
import Header from "./Header";
import RandomAPI from "../api/RandomAPI";
import Overlay from "./Overlay";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

/**
 * App component
 */
class App extends React.Component {
  //State initialization
  state = {
    employees: [],
    displayedEmployees: [],
    match: null,
    overlay: "hidden",
    selectedEmployee: null,
    selectedIndex: null
  };

  /**
   * Gets a list of employees from RandomAPI, then store the list in state
   */
  getEmployeeList = async () => {
    const response = await RandomAPI.get("?results=100&nat=us");
    const employees = response.data.results.map(
      employee => new Employee(employee)
    );
    this.setState({ employees: employees, displayedEmployees: employees });
  };

  /**
   * callback to be called when user type in the search bar
   * Filters the employee list against user input, then set displayedEmployees to
   * the list of matching results
   * @param {string} term - the term user entered in seach field
   */
  filterEmployees = term => {
    //remove spaces from search term
    const formattedTerm = term
      .trim()
      .split(" ")
      .join("")
      .toLowerCase();

    const employeeList = this.state.employees.filter(employee => {
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

  /**
   * Callback to be called when employee card is clicked
   * @param {string} employeeUuId - a unique id that identifies employee, comes from RandomAPI
   */
  onClickCard = employeeUuId => {
    //find the employee with given uuid in displayed employees list
    const selectedEmployee = this.state.displayedEmployees.find(
      employee => employee.uuid === employeeUuId
    );
    this.setState({ overlay: "show", selectedEmployee }, () => {
      //show overlay
      //find the employee index in displayedEmployees with given uuid
      let selectedIndex = this.state.displayedEmployees.findIndex(
        employee => employee.uuid === this.state.selectedEmployee.uuid
      );
      this.setState({ selectedIndex });
    });
  };

  /**
   * Callback to be called when overlay is clicked
   * Hides overlay
   */
  onClickCloseOverlay = event => {
    this.setState({ overlay: "hidden" });
  };

  /**
   * Callback to be called when left/right arrow button is clicked
   * Navigates to previous/next employee in the modal
   */
  onClickArrow = orientation => {
    let selectedIndex = this.state.selectedIndex; //get current selected employee index
    if (orientation === "left") {
      //if left arrow is clicked
      --selectedIndex;
    } else {
      //if right arrow is clicked
      ++selectedIndex;
    }
    this.setState({
      //updates selected employee and it's index
      selectedEmployee: this.state.displayedEmployees[selectedIndex],
      selectedIndex
    });
  };

  /**
   * After component mounts, make an async api call to RandomAPI
   */
  componentDidMount = () => {
    this.getEmployeeList();
  };

  render() {
    return (
      <div className="app-container">
        <Overlay
          display={this.state.overlay}
          onClick={this.onClickCloseOverlay}
        >
          <Modal
            selectedEmployee={this.state.selectedEmployee}
            selectedIndex={this.state.selectedIndex}
            length={this.state.displayedEmployees.length}
            onClick={this.onClickArrow}
          />
        </Overlay>
        <Header title="AWESOME STARTUP EMPLOYEE DIRECTORY" />

        <SearchBar onInputChange={this.filterEmployees} />
        <EmployeeList
          employees={this.state.displayedEmployees}
          match={this.state.match}
          onClickCard={this.onClickCard}
        />
      </div>
    );
  }
}

export default App;
