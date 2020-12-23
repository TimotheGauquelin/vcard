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
        <WhiteBackground></WhiteBackground>
        {/* <img className="selfie" src={`${process.env.PUBLIC_URL}/img/happyguyguy.png`} alt="" /> */}
      </div>
    );
  }
}

export default App