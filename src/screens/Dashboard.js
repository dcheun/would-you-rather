import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import qs from "qs";
import QuestionList from "../components/QuestionList";

export class Dashboard extends Component {
  state = {
    activeTab: "unanswered",
  };

  componentDidMount() {
    const { activeTab } = this.props;
    // Set the active tab if query string was provided
    // in the URL.
    this.setState(() => ({
      activeTab,
    }));
  }

  handleTabClick = (e) => {
    const { id } = e.target;
    const { history } = this.props;

    this.setState(() => ({
      activeTab: id,
    }));

    // Setting search query params here so user can
    // navigate back to the same tab when they hit
    // the back button from another screen.
    history.push({
      pathname: "/",
      search: `?activeTab=${id}`,
    });
  };

  render() {
    const { activeTab } = this.state;
    const {
      authedUser,
      answeredQuestionIds,
      unansweredQuestionIds,
    } = this.props;

    if (!authedUser) {
      return <Redirect to="/signin" />;
    }

    return (
      <div className="card">
        <div className="card-tabs">
          <div
            className={`card-tab ${activeTab === "unanswered" && "active"}`}
            id="unanswered"
            onClick={this.handleTabClick}
          >
            Unaswered Questions
          </div>
          <div
            className={`card-tab border-left ${
              activeTab === "answered" && "active"
            }`}
            id="answered"
            onClick={this.handleTabClick}
          >
            Answered Questions
          </div>
        </div>
        <div className="p-05">
          <QuestionList
            type={activeTab}
            questionIds={
              activeTab === "answered"
                ? answeredQuestionIds
                : unansweredQuestionIds
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  // Parse URL query string for "activeTab"
  const search = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const activeTab = search.activeTab === "answered" ? "answered" : "unanswered";

  // Get lists of authedUser's answered and unanswered questions.
  // Sort by most recent at the top.
  const answeredQuestionIds = users[authedUser]
    ? Object.keys(users[authedUser].answers).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      )
    : [];

  const unansweredQuestionIds = Object.keys(questions)
    .filter((x) => !answeredQuestionIds.includes(x))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  return {
    authedUser,
    answeredQuestionIds,
    unansweredQuestionIds,
    activeTab,
  };
};

export default connect(mapStateToProps)(Dashboard);
