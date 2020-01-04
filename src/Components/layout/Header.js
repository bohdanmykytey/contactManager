import React from "react";
import PropTypes from "prop-types";

//functional components - they do NOT hold state
const Header = props => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm 
    navbar-dark bg-danger mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
    </nav>
  );
};

//default prop -- in this case a
//default header of My App

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

//making css with react, also splitting up style into
//components -- aka style components
const headingStyle = {
  color: "red",
  fontSize: "50px"
};

export default Header;
