import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Leaderboard from "../screens/Leaderboard";
import Dashboard from "../screens/Dashboard";
import SignIn from "../screens/SignIn";
import NewQuestion from "../screens/NewQuestion";
import QuestionDetail from "../screens/QuestionDetail";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <div className="container">
            <Nav />
            <div className="screen">
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/signin" component={SignIn} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:id" component={QuestionDetail} />
            </div>
          </div>
        </>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
