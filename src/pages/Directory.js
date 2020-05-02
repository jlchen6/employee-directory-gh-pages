import React, { Component } from "react";
import API from "../util/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Directory extends Component {
    state = {
        search: "",
        employeeList: [],
        results: [],
        error: ""
    };

    // When component mounts, get list of random users to display
    componentDidMount() {
        API.getRandomUsers()
            .then(res => this.setState({ results: res.data.results,
            employeeList: res.data.results }))
            .catch(err => console.log(err))
    };

    // As the user types into the search bar, update the state to hold the search value 
    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    // When the user hits the submit button, search through the userList for the searched employees and display only the cards for the employees that match that search.
    handleFormSubmit = event => {
        event.preventDefault();
        var filteredList = this.state.employeeList.filter(employee => {
            let employeeName = employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase();
            return employeeName.indexOf(this.state.search.toLowerCase()) !== -1
        })
        this.setState({results: filteredList});
    }

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <SearchResults results={this.state.results} />
            </div>
        )
    }

}

export default Directory;