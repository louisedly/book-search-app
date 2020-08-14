import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import './App.css';

// Get user input
// Output list of books from google books api based from user's input and save that data to state

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  }

  componentDidMount() {

}

  render() {

    return (
      <div className="app">

        <Header />
        <main className="wrapper">
          <Main />

        </main>
        <Footer />

      </div>
    );
  }
}

export default App;
