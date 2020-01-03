import React, { Component } from "react";
import "./App.css";
import Contacts from "./Components/Contacts.js";
import Header from "./Components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
