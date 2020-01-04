import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = event => {
    this.setState(
      { [event.target.name]: event.target.value } //state reacting to the input - allows input fields to be used and added into state(schema)
    );
  };

  onSubmit = (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    const newContact = {
        id: uuid(),
        name: name,
        email: email,
        phone: phone
    }

    dispatch({type: 'ADD_CONTACT', payload: newContact})

    //clear state of form after form submit
    this.setState({
        name: '',
        email: '',
        phone: ''
    })
  };

  render() {
    const { name, email, phone } = this.state;

    //when using a form each piece is going to be a piece of the state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-sm"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-sm"
                      placeholder="Enter Phone Number"
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
