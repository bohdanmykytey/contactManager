import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputgroup from "../layout/TextInputGroup";
import uuid from "uuid";

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
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //clear state of form after form submit
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
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
                  <TextInputgroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />

                  <TextInputgroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <TextInputgroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />

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
