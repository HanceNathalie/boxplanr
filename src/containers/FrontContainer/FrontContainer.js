import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './FrontContainer.css';

import NavBarFront from '../NavBarFront/NavBarFront';
import HomePage from '../../modules/HomePage';
import FooterFront from '../FooterFront/FooterFront';

export default class FrontContainer extends React.Component {
  render() {
    return (
      <div className="GlobalWrapper">
        <header>
            <NavBarFront />
        </header>
       
        <Switch>
           
            <Route 
              exact
              path="/"
              component={HomePage} 
            />
            <Route 
              render={() => <p>Page not found<br/>(see this render on /FrontContainer/FrontContainer.js)</p>}
            />
           
        </Switch>

        <FooterFront />
    </div>
    );
  }
}
