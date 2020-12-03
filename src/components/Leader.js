import React from "react";
import { FaTrophy } from "react-icons/fa";

const Leader = ({ user, standing }) => {
  const getStandingTemplate = (standing) => {
    let color = "brown";
    switch (standing) {
      case 1:
        color = "gold";
        break;
      case 2:
        color = "#00b5ad";
        break;
      case 3:
        break;
      default:
        return null;
    }
    return (
      <>
        <div className="triangle"></div>
        <FaTrophy className="trophy" style={{ color }} />
      </>
    );
  };

  return (
    <div className="card mb-1">
      <div className="leader p-1">
        {getStandingTemplate(standing)}
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className="avatar avatar-medium mr-1"
        />
        <div className="flex-grow-1 plr-1 border-left mr-1 border-right">
          <h2 className="mb-1">{user.name}</h2>
          <div className="leader-stats pbt-1 pr-1 border-bottom">
            <p>Answered questions</p>
            <p>{Object.values(user.answers).length}</p>
          </div>
          <div className="leader-stats pbt-1 pr-1">
            <p>Created questions</p>
            <p>{user.questions.length}</p>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-hdr center">
              <h3>Score</h3>
            </div>
            <div className="score">
              <span className="score-badge">
                {Object.values(user.answers).length + user.questions.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leader;
