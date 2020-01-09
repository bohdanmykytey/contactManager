import React, { Component } from "react";
import Contact from '../contacts/Contact';
import { Consumer } from "../../context";

//class based component becasue it hasd state
class Contacts extends Component {
  deleteContact = id => {
    //propogating up to the parent component
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>List
              </h1>
              {contacts.map((
                contact //pulling values out of state and mapping over them
              ) => (
                <Contact
                  key={contact.id} //again, react likes id's
                  contact={contact} //whats being rendered
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
