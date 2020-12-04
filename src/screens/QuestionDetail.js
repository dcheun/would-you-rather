import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuestionVote from "../components/QuestionVote";
import QuestionInfo from "../components/QuestionInfo";

const QuestionDetail = ({ authedUser, question, author, answer, id }) => {
  if (!authedUser) {
    return <Redirect to={{ pathname: "/signin", search: `?qid=${id}` }} />;
  }

  if (!question) {
    return <Redirect to="/pagenotfound" />;
  }

  return (
    <>
      {answer ? (
        <QuestionInfo question={question} author={author} answer={answer} />
      ) : (
        <QuestionVote question={question} author={author} />
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question?.author];
  const answer = users[authedUser]?.["answers"]?.[id];

  return {
    authedUser,
    question,
    author,
    answer,
    id,
  };
};

export default connect(mapStateToProps)(QuestionDetail);
