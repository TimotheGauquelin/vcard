import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact'
import './stylesheets/App.scss';

class App extends Component {

  state = {

  }

  render() {

    return (
      <div className="bg">
        <Header></Header>
        <Home></Home>
        {/* <Contact></Contact> */}
      </div>
    );
  }
}

export default App