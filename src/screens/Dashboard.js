import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionList from "../components/QuestionList";

export class Dashboard extends Component {
  state = {
    activeTab: "unanswered",
  };

  handleTabClick = (e) => {
    const { id } = e.target;

    this.setState(() => ({
      activeTab: id,
    }));
  };

  render() {
    const { activeTab } = this.state;
    const {
      answeredQuestionIds,
      unansweredQuestionIds,
      authedUser,
      history,
    } = this.props;

    if (!authedUser && activeTab === "answered") {
      history.push("/signin");
    }

    return (
      <div className="card">
        <div className="card-tabs">
          <div
            className={`card-tab card-tab-left ${
              activeTab === "unanswered" && "active"
            }`}
            id="unanswered"
            onClick={this.handleTabClick}
          >
            Unaswered Questions
          </div>
          <div
            className={`card-tab card-tab-right ${
              activeTab === "answered" && "active"
            }`}
            id="answered"
            onClick={this.handleTabClick}
          >
            Answered Questions
          </div>
        </div>
        <div className="p-0-5">
          <QuestionList
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

const mapStateToProps = ({ authedUser, questions, users }) => {
  const answeredQuestionIds = users[authedUser]
    ? Object.keys(users[authedUser].answers)
    : [];
  const unansweredQuestionIds = Object.keys(questions).filter(
    (x) => !answeredQuestionIds.includes(x)
  );
  return {
    authedUser,
    answeredQuestionIds,
    unansweredQuestionIds,
  };
};

export default connect(mapStateToProps)(Dashboard);
