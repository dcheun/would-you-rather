import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Leaderboard from "../screens/Leaderboard";
import Dashboard from "../screens/Dashboard";
import SignIn from "../screens/SignIn";
import NewQuestion from "../screens/NewQuestion";
import QuestionDetail from "../screens/QuestionDetail";

class App extends Component {
  componentDidMount() {
    //todo: dispatch initial data.
  }

  render() {
    return (
      <Router>
        <>
          <div className="container">
            <Nav />
            <div>
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

export default connect()(App);
