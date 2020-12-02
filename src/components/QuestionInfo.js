import React from "react";

const QuestionInfo = ({ user, question, author, answer }) => {
  // if (!question) {
  //   return null;
  // }
  // console.log(`QuestionInfo: user:`, user);
  // console.log(`QuestionInfo: question:`, question);
  // console.log(`QuestionInfo: author:`, author);
  // console.log(`QuestionInfo: answer:`, answer);

  const getTotalVotes = () => {
    return question.optionOne.votes.length + question.optionTwo.votes.length;
  };

  const percentage = (val, total) => {
    return Number(((100 * val) / total).toFixed(1));
  };

  return (
    <div className="card question">
      <div className="card-section plr-20 bg-gray">
        <h3>Asked by {author.name}</h3>
      </div>
      <div className="card-q-body card-section plr-20">
        <img
          src={author.avatarURL}
          alt={`Avatar of ${author.name}`}
          className="avatar avatar-large"
        />
        <div className="ml-1 card-form-container pb-1">
          <h2>Results:</h2>
          {["optionOne", "optionTwo"].map((option) => {
            let q = question[option];
            let numVotes = q.votes.length;
            let pct = percentage(numVotes, getTotalVotes());
            return (
              <div
                key={option}
                id={option}
                className={`q-option ${answer === option && "q-option-vote"}`}
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
                <h3>Would you rather {question[option].text}?</h3>
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
