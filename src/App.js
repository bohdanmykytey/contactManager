import React, { Component } from "react";
import "./App.css";
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from './Components/layout/AddContact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router >
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
