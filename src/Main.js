import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookResults from './BookResults';
import axios from 'axios';

class Main extends Component {
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
            this.setState({
                books: [...response.data.items],
            })
        }).catch(error => {
            
            alert("Could not find search query. Please check the spelling and try again.")
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
                <BookResults books={this.state.books}/>
            </div>
        );
    }
}

export default Main;