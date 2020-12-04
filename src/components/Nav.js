import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authedUser";

const Nav = ({ signedInUser, dispatch }) => {
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <nav className="nav container">
        <div className="nav-items">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" activeClassName="active">
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" activeClassName="active">
                Leader Board
              </NavLink>
            </li>
          </ul>
          {signedInUser ? (
            <ul>
              <li>Hello, {signedInUser.name}</li>
              <li className="avatar-li">
                <img
                  src={signedInUser.avatarURL}
                  alt={`Avatar of ${signedInUser.name}`}
                  className="avatar avatar-mini"
                />
              </li>
              <li>
                <div className="btn-logout" onClick={handleLogout}>
                  Logout
                </div>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signin">
                  <div>Sign In</div>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <hr className="nav-hr" />
    </>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const signedInUser = authedUser ? users[authedUser] : null;

  return {
    signedInUser,
  };
};

export default connect(mapStateToProps)(Nav);
