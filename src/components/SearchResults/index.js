import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeHeader from "../EmployeeHeader/EmployeeHeader";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {/* First item in the list should be the header for the table */}
      <li>
        <EmployeeHeader/>
      </li>
      {/* For each employee in the results array, create an employee card to display their data */}
      {props.results.map(result => (
        <li key={result.id.value} className="list-group-item">
          {/* Pass in the employee data as props */}
          <EmployeeCard
            picture={result.picture.thumbnail} 
            name={result.name.first +" "+ result.name.last}
            phone={result.phone}
            email={result.email} 
            dob={new Date(result.dob.date)} />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
