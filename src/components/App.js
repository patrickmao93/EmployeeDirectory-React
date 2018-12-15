import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const App = props => {
  return (
    <div className="app-container">
      <Header title="AWESOME STARTUP EMPLOYEE DIRECTORY">
        <SearchBar />
      </Header>
      <EmployeeList />
    </div>
  );
};

export default App;
