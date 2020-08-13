import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Books from './Books';

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
      <div className="app wrapper">

        <Header />

        <main>
          <Books />

        </main>
        
        <Footer />

      </div>
    );
  }
}

export default App;
