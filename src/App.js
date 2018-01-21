import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter } from 'react-router-dom';

import FrontContainer from './containers/FrontContainer/FrontContainer';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <FrontContainer />
        </div>
      </BrowserRouter>
    );
  }
}
