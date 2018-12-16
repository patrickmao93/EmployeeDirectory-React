import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";
import RandomAPI from "../api/RandomAPI";

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

class App extends React.Component {
  state = { employees: [] };

  getEmployeeList = async () => {
    const response = await RandomAPI.get("?results=200&nat=us");
    const employees = response.data.results.map(
      employee => new Employee(employee)
    );
    this.setState({ employees });
  };

  componentDidMount = () => {
    this.getEmployeeList();
  };

  render() {
    return (
      <div className="app-container">
        <Header title="AWESOME STARTUP EMPLOYEE DIRECTORY">
          <SearchBar />
        </Header>
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
