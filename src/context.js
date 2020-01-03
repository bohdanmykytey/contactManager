import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
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

  render()  {
      return(
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      )
  }



}

export const Consumer = Context.Consumer;
