import React, { Component } from 'react';
import Thoughts from './Thoughts';
import Schedule from './Schedule';
import ToDo from './ToDo';

class Today extends Component {
    render() {
      return (
        <div>
          <Schedule />
          <ToDo />
          <Thoughts />
        </div>
      );
    }
}

export default Today;