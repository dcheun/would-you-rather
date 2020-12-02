import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuestionVote from "../components/QuestionVote";
import QuestionInfo from "../components/QuestionInfo";

const QuestionDetail = ({ user, question, author, answer }) => {
  // if (!authedUser) {
  //   return <Redirect to="/signin" />;
  // }

  console.log(`QuestionDetail: user:`, user);
  console.log(`QuestionDetail: question:`, question);
  console.log(`QuestionDetail: author:`, author);
  console.log(`QuestionDetail: answer:`, answer);

  return (
    <>
      {answer ? (
        <QuestionInfo
          user={user}
          question={question}
          author={author}
          answer={answer}
        />
      ) : (
        <QuestionVote user={user} question={question} author={author} />
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, props) => {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question?.author];
  const user = users[authedUser];
  const answer = user?.["answers"]?.[id];

  return {
    user,
    question,
    author,
    answer,
  };
};

export default connect(mapStateToProps)(QuestionDetail);
