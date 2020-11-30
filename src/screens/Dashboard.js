import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Dashboard = ({ authedUser }) => {
  if (!authedUser) {
    return <Redirect to="/signin" />;
  }

  return <div>Dashboard</div>;
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Dashboard);
