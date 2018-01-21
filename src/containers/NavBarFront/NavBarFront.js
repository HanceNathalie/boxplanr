import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBarFront extends React.Component {
  render() {
    return (
        <nav>
            <ul>
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: 'red'
                    }}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink 
                    to={{
                      pathname: '/test'
                    }}
                  >Test</NavLink>
                </li>
            </ul>
        </nav>
    );
  }
}
