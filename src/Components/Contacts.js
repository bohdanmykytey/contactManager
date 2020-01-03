import React, { Component } from "react";
import Contact from "./Contact";

//class based component becasue it hasd state
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        //state that holds a key of contacts as an array
        {
          id: 1, //react likes id's
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-123-4567"
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwills@gmail.com",
          phone: "555-321-7654"
        },
        {
          id: 3,
          name: "Mike Smith",
          email: "msmith@gmail.com",
          phone: "555-132-4576"
        }
      ]
    };
  }

  deleteContact = (id)  =>  { //propogating up to the parent component
    const { contacts } = this.state;
    
    const newContacts = contacts.filter(contact => 
      contact.id !== id);

    this.setState({
      contacts: newContacts
    });  
  };

  render() {
    const { contacts } = this.state; //destructuring using curly braces

    // React.Fragment gets rid of unnesesary elemnts on the dom like an extra <div></div>
    return (
      <React.Fragment>
        {contacts.map((
          contact //pulling values out of state and mapping over them
        ) => (
          <Contact
            key={contact.id} //again, react likes id's
            contact={contact} //whats being rendered
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
