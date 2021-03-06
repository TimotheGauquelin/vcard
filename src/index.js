import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components
import App from './App';
import Home from './components/Home';
import Contact from './components/Contact';

//Internalization
import Wrapper from "./components/Wrapper"

import reportWebVitals from './reportWebVitals';

//Route

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/contact' component={Contact} />
            {/* <Route component={NotFound} /> */}
        </Switch>
    </Router>
);

ReactDOM.render(
  <Wrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode >
  </Wrapper>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
