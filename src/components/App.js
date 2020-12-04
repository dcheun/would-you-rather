import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Leaderboard from "../screens/Leaderboard";
import Dashboard from "../screens/Dashboard";
import SignIn from "../screens/SignIn";
import NewQuestion from "../screens/NewQuestion";
import QuestionDetail from "../screens/QuestionDetail";
import PageNotFound from "../screens/PageNotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <>
          <LoadingBar />
          <Nav />
          <div className="screen">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/signin" component={SignIn} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/questions/:id" component={QuestionDetail} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default connect()(App);
