import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Leader from "../components/Leader";

const Leaderboard = ({ authedUser, leaders }) => {
  if (!authedUser) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="card no-border">
      {leaders.map((user, idx) => (
        <Leader key={user.id} user={user} standing={idx + 1} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  // Get a list of users sorted by high score.
  // Their score is calculated as the sum of questions
  // answered and created.
  const leaders = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );

  return {
    authedUser,
    leaders,
  };
};

export default connect(mapStateToProps)(Leaderboard);
