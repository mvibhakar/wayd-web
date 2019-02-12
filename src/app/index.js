import React, { Component } from 'react';
import Header from './_shared/Header';
import Today from './today';

class App extends Component {
  render() {
    return (
      <div>
        <Header title='today' />
        <Today />
      </div>
    );
  }
}

export default App;
