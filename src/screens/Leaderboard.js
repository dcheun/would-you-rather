import React from "react";
import { connect } from "react-redux";
import Leader from "../components/Leader";

const Leaderboard = ({ leaders }) => {
  return (
    <div className="card no-border">
      {leaders.map((user, idx) => (
        <Leader key={user.id} user={user} standing={idx + 1} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const leaders = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );
  return {
    leaders,
  };
};

export default connect(mapStateToProps)(Leaderboard);
