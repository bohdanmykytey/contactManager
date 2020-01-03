import React, { Component } from "react";
import "./App.css";
import Contacts from "./Components/Contacts.js";
import Header from "./Components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    );
  }
}
export default App;
