import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            userInput: ""
        }
    }

    getBooks = (event) => {
        event.preventDefault();

        axios({
        url: `https://www.googleapis.com/books/v1/volumes`,
        method: `GET`,
        responseType: `json`,
        params: {
            key: `AIzaSyCOKF-vmzUM8s4Rarpvh-3_cX6A2LG-KOo`,
            q: `${this.state.userInput}`
        }
        })
        .then((response) => {
            console.log(response);

            // this.setState({

            // })
        })
    }

    handleUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }


    render() {
        return (
            <div>
                <SearchBar getBooks={this.getBooks} handleUserInput={this.handleUserInput}/>
            </div>
        );
    }
}

export default Books;