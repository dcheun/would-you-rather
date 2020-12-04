import React from "react";

const QuestionInfo = ({ question, author, answer }) => {
  const getTotalVotes = () => {
    return question.optionOne.votes.length + question.optionTwo.votes.length;
  };

  const percentage = (val, total) => {
    return Number(((100 * val) / total).toFixed(1));
  };

  return (
    <div className="card">
      <div className="card-hdr">
        <h3>Asked by {author.name}</h3>
      </div>
      <div className="q-flex-container">
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className="avatar avatar-large mr-1"
        />
        <div className="q-res-container">
          <h2 className="mb-1">Results:</h2>
          {["optionOne", "optionTwo"].map((option) => {
            let q = question[option];
            let numVotes = q.votes.length;
            let pct = percentage(numVotes, getTotalVotes());
            return (
              <div
                key={option}
                id={option}
                className={`q-option ${option} ${
                  answer === option && "q-option-vote"
                }`}
              >
                <div
                  className="q-option-vote-badge"
                  style={{ display: `${answer === option ? "flex" : "none"}` }}
                >
                  <span>
                    Your
                    <br />
                    vote
                  </span>
                </div>
                <h3 className="mb-1">
                  Would you rather {question[option].text}?
                </h3>
                <div className="pct-bar">
                  <div className="pct-bar-value" style={{ width: `${pct}%` }}>
                    <p>{numVotes > 0 && `${pct}%`}</p>
                  </div>
                </div>
                <p className="center">
                  {numVotes} out of {getTotalVotes()} votes
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionInfo;
