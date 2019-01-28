import React, { Component } from 'react';

class App extends Component {

  static displayName = "Namin the app"

  constructor(props) {
    super(props);
    this.function1 = this.function1.bind(this);
  }

  function1() {
    console.log("function 1");
    console.log(this.props);
  }

  useArrows = () => {
    console.log("use arraow without binding");
    console.log(this.props);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button
          onClick={this.function1}
        >
          test function 1
        </button>
        < button
        onClick = {
            this.useArrows
          } >
          testuseArrows 
          </button>
      </div>
    );
  }
}


export default App;
