import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = ({ author, question }) => {
  return (
    <div className="card">
      <div className="card-hdr">
        <h3>{author.name} asks:</h3>
      </div>
      <div className="q-flex-container">
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className="avatar avatar-medium ml-1 mr-2"
        />
        <div className="q-res-container">
          <h3 className="mb-1">Would you rather</h3>
          <p className="mb-1">...{question.optionOne.text.slice(0, 20)}...</p>
          <Link to={`/questions/${question.id}`}>
            <button className="btn btn-view fluid">View Poll</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id];
  const author = users[question?.author];

  return {
    author,
    question,
  };
};

export default connect(mapStateToProps)(Question);
