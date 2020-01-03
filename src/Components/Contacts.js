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
          name: "Harry Johnson",
          email: "hjohnson@gmail.com",
          phone: "555-132-4576"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state; //destructuring using curly braces

    return (
      <React.Fragment>
        {contacts.map(contact  => ( //pulling values out of state and mapping over them
          <Contact
            key={contact.id} //again, react likes id's
            contact={contact} //whats being rendered
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
