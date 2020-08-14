import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BookResults from './BookResults';
import Footer from './Footer';
import axios from 'axios';
import './App.css';

class App extends Component {
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
        q: `${this.state.userInput}`
      }
    })
      .then((response) => {
        this.setState({
          books: [...response.data.items],
        })
      }).catch(error => {
        alert("Sorry, search query could not be found. Please check the spelling and try again.")
        window.location.reload();
      })
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (

      <div className="app">

        <Header />

        <main className="wrapper">

          <SearchBar getBooks={this.getBooks}
            handleUserInput={this.handleUserInput}/>

          <BookResults books={this.state.books} />

        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
