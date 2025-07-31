import React, { Component } from 'react';
import moment from "moment";

import PortfolioContainer from './portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cayden Boothe React Starter</h1>
        <div>
        <PortfolioContainer />
          {moment().format('MMMM Do YYYY, h:mm:ss a')};
        </div>
        <div>
        </div>
      </div>
    );
  }
}
