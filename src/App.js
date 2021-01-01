import React, { Component } from 'react';
import Header from './components/Header'
import WhiteBackground from './components/WhiteBackground'
import './stylesheets/App.scss';

class App extends Component {

  state = {

  }

  render() {

    return (
      <div className="bg">
        <Header></Header>
        <div className="content">
            <WhiteBackground></WhiteBackground>
        </div>
      </div>
    );
  }
}

export default App