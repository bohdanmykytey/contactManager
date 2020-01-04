import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type)  { //will evaluate the object type which will be a string
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>  
        contact.id !== action.payload) //payload is data you want to send along with your action
      }
      default: 
        return state;
  }
}

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
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
