import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const NewQuestion = ({ authedUser }) => {
  if (!authedUser) {
    return <Redirect to="/signin" />;
  }

  return <div>NewQuestion</div>;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
