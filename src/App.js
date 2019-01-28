import React, { Component } from 'react';
import loggify from './loggify';

class App extends Component {

  static displayName = "Namin the app"


  render() {
    console.log(this.state);
    return (
      <div>
        hello
      </div>
    );
  }
}

App = loggify(App);

export default App;
