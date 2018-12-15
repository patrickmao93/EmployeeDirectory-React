import React from "react";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

const App = props => {
  return (
    <div>
      <SearchBar />
      <EmployeeList />
    </div>
  );
};

export default App;
