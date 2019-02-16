import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: "one"
    };
  }
  render() {
    return (
      <div className="App">
        {
          (this.state.step = "one" && (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              Welcome to Kleen.io
            </header>
          ))
        }
      </div>
    );
  }
}

export default App;
