import React, { Component } from "react";
import axios from 'axios'

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type)  { //will evaluate the object type which will be a string
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>  
        contact.id !== action.payload) //payload is data you want to send along with your action
      };
      
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      default: 
        return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      //state that holds a key of contacts as an array

    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  //fetching contacts from an API
  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    this.setState({
      contacts: res.data
    })
  }




  render()  {
      return(
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      )
  }



}

export const Consumer = Context.Consumer;
