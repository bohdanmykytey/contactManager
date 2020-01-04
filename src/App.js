import React, { Component } from "react";
import "./App.css";
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from './Components/layout/AddContact'

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
