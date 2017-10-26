import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { HomePage, ArsPage } from 'components';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ars" component={ArsPage} />
      </div>
    );
  }
}

export default App;
