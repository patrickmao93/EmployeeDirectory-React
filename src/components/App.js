import React from "react";
import Header from "./Header";
import RandomAPI from "../api/RandomAPI";
import Overlay from "./Overlay";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const config = {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit"
  };
  return d.toLocaleDateString("en-US", config);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeEach(str) {
  return str
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
}

class Employee {
  constructor(data) {
    this.uuid = data.login.uuid;
    this.info = {
      //employee info
      firstName: capitalize(data.name.first),
      lastName: capitalize(data.name.last),
      email: data.email,
      phone: data.phone,
      picURL: data.picture.large,
      city: capitalize(data.location.city),
      address: `${capitalizeEach(data.location.street)}, ${capitalize(
        data.location.state
      )} ${data.location.postcode}`,
      birthday: formatDate(data.dob.date)
    };
  }
}

class App extends React.Component {
  state = {
    employees: [],
    displayedEmployees: [],
    match: null,
    overlay: "hidden",
    selectedEmployee: null,
    selectedIndex: null
  };

  getEmployeeList = async () => {
    const response = await RandomAPI.get("?results=100&nat=us");
    const employees = response.data.results.map(
      employee => new Employee(employee)
    );
    this.setState({ employees: employees, displayedEmployees: employees });
  };

  filterEmployees = term => {
    //remove space from search term
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

  onClickCard = employeeUuId => {
    const selectedEmployee = this.state.displayedEmployees.find(
      employee => employee.uuid === employeeUuId
    );
    this.setState({ overlay: "show", selectedEmployee }, () => {
      let selectedIndex = this.state.displayedEmployees.findIndex(
        employee => employee.uuid === this.state.selectedEmployee.uuid
      );
      this.setState({ selectedIndex });
    });
  };

  onClickCloseOverlay = event => {
    this.setState({ overlay: "hidden" });
  };

  onClickArrow = orientation => {
    let selectedIndex = this.state.selectedIndex;
    if (orientation === "left") {
      --selectedIndex;
    } else {
      ++selectedIndex;
    }
    this.setState({
      selectedEmployee: this.state.displayedEmployees[selectedIndex],
      selectedIndex
    });
  };

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
