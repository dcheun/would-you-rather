import React, { Component } from "react";
import { connect } from "react-redux";
import qs from "qs";
import QuestionList from "../components/QuestionList";

export class Dashboard extends Component {
  state = {
    activeTab: "unanswered",
  };

  componentDidMount() {
    const { activeTab } = this.props;
    this.setState(() => ({
      activeTab,
    }));
  }

  handleTabClick = (e) => {
    const { id } = e.target;
    const { authedUser, history } = this.props;

    this.setState(() => ({
      activeTab: id,
    }));

    if (!authedUser && id === "answered") {
      history.push("/signin");
    } else {
      // Setting search query params here so user can
      // navigate back to the same tab when they hit
      // the back button from another screen.
      history.push({
        pathname: "/",
        search: `?activeTab=${id}`,
      });
    }
  };

  render() {
    const { activeTab } = this.state;
    const { answeredQuestionIds, unansweredQuestionIds } = this.props;

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
  const queryString = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const activeTab =
    queryString.activeTab === "answered" ? "answered" : "unanswered";

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
