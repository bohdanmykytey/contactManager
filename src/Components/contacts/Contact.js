import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showContactInfo: false //set state
    };

    // no function binding nessesary when using arrow functions for onClick
    // on event change etc
  }

  //proptypes validates the data type(declares what
  //it should be like string, object etc)
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick = event => {
    this.setState(
      { showContactInfo: !this.state.showContactInfo } //toggle state
    );
  };

  //delete ruquest
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({ type: 'DELETE_CONTACT', payload: id })
  };

  render() {
    const { id, name, email, phone } = this.props.contact; //destructuring - same as this.props.contact accept cleaner and with less code
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? ( //terinary operator for toggling showContactInfo()
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
