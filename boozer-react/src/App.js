import React, { Component } from "react";

import "./App.css";
import CockTailsComponent from "./CocktailsComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Boozer!</h1>
        </header>

        <CockTailsComponent />
      </div>
    );
  }
}

export default App;
