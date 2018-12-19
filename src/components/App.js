import React from "react";
import Header from "./Header";
import RandomAPI from "../api/RandomAPI";
import Overlay from "./Overlay";
import Modal from "./Modal";
import EmployeeDirectory from "./EmployeeDirectory";

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
  state = { employees: [], modal: "hidden" };

  getEmployeeList = async () => {
    const response = await RandomAPI.get("?results=500&nat=us");
    const employees = response.data.results.map(
      employee => new Employee(employee)
    );
    this.setState({ employees: employees });
  };

  onClickCard = event => {
    this.setState({ modal: "show" });
  };

  componentDidMount = () => {
    this.getEmployeeList();
  };

  render() {
    return (
      <div className="app-container">
        <Overlay display={this.state.modal}>
          <Modal />
        </Overlay>
        <Header title="AWESOME STARTUP EMPLOYEE DIRECTORY" />
        <EmployeeDirectory
          employees={this.state.employees}
          onClickCard={this.onClickCard}
        />
      </div>
    );
  }
}

export default App;
