import React, { Component } from "react";
import API from "../util/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Button from "../components/Button"

class Directory extends Component {
    // state for this component. 
    state = {
        // search holds the string that users type into the search form
        search: "",
        // employeeList holds the full list of employees returned from the API call
        employeeList: [],
        // results holds the filtered/sorted list of employees
        results: []
    };

    // When component mounts, get list of random users to display
    componentDidMount() {
        // call the api to populate the list of employees
        API.getRandomUsers()
            // Put the results from the API call into the employeeList, and display them in the Search Results section by populating the results array.
            .then(res => this.setState({
                results: res.data.results,
                employeeList: res.data.results
            }))
            .catch(err => console.log(err))
    };

    // As the user types into the search bar, update the state to hold the search value 
    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // Filter the employeeList for employees whose name matches the searched string
        var filteredList = this.state.employeeList.filter(employee => {
            // create a string to hold the employee's full name, set to lowercase to avoid case matching
            let employeeName = employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase();
            // Return the boolean result of finding if the searched string can be found within this employee's full name
            return employeeName.indexOf(this.state.search.toLowerCase()) !== -1
        })
        // Display the filtered list in the search results section
        this.setState({ results: filteredList });
    };

    // When the user hits the submit button, search through the userList for names that match the searched string
    handleFormSubmit = event => {
        event.preventDefault();
        // Filter the employeeList for employees whose name matches the searched string
        var filteredList = this.state.employeeList.filter(employee => {
            // create a string to hold the employee's full name, set to lowercase to avoid case matching
            let employeeName = employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase();
            // Return the boolean result of finding if the searched string can be found within this employee's full name
            return employeeName.indexOf(this.state.search.toLowerCase()) !== -1
        })
        // Display the filtered list in the search results section
        this.setState({ results: filteredList });
    }

    // sort the list of employees by date of birth
    sortByDOB = event => {   
        event.preventDefault();
        // Create a variable to hold the sorted list
        var sortedList = this.state.employeeList.sort((a, b) => {
            // Compare each employee's dates of birth.
            return (new Date(a.dob.date) > new Date(b.dob.date) ? 1 : -1)
        })
        // Display the sorted list in the search results section
        this.setState({ results: sortedList })
    }

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Button onClick={this.sortByDOB}>Sort All by DOB</Button>
                <SearchResults results={this.state.results} />
            </div>
        )
    }

}

export default Directory;