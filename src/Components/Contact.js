import React, { Component } from "react";
import PropTypes from "prop-types";

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

  render() {
    const { name, email, phone } = this.props.contact; //destructuring - same as this.props.contact accept cleaner and with less code
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? ( //terinary operator for toggling showContactInfo()
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
