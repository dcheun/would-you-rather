import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const QuestionDetail = ({ authedUser }) => {
  if (!authedUser) {
    return <Redirect to="/signin" />;
  }

  return <div>QuestionDetail</div>;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionDetail);
