import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import EmployeeHeader from "../EmployeeHeader/EmployeeHeader";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      <li>
        <EmployeeHeader/>
      </li>
      {props.results.map(result => (
        <li key={result.id.value} className="list-group-item">
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
