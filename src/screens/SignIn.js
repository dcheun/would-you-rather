import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

export class SignIn extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;
    const { dispatch, history } = this.props;

    dispatch(setAuthedUser(value));
    history.push("/");
  };

  render() {
    const { value } = this.state;
    const { users } = this.props;

    return (
      <div className="flex-container">
        <div className="card center">
          <div className="card-section bg-gray">
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </div>
          <img src="./logo192.png" alt="logo" className="login-logo" />
          <div className="card-section">
            <h2 className="ui teal header">Sign in</h2>
          </div>
          <div className="card-section">
            <form className="card-section" onSubmit={this.handleSubmit}>
              <select
                className={value ? "" : "placeholder"}
                value={value}
                onChange={this.handleChange}
              >
                <option className="placeholder" value="">
                  Select User
                </option>
                {users &&
                  Object.values(users).map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
              </select>

              <button
                className={`btn-teal btn fluid ${value ? "" : "disabled"}`}
                disabled={value === ""}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(SignIn);
