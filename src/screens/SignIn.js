import React, { Component } from "react";
import { connect } from "react-redux";
import qs from "qs";
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
    const { qid, dispatch, history } = this.props;

    dispatch(setAuthedUser(value));
    // Navigate to requested question if query string
    // was provided.
    if (qid) {
      history.push(`/questions/${qid}`);
    } else {
      history.push("/");
    }
  };

  render() {
    const { value } = this.state;
    const { users } = this.props;

    return (
      <div className="card center">
        <div className="card-hdr">
          <h3 className="mb-05">Welcome to the Would You Rather App!</h3>
          <p>Please sign in to continue</p>
        </div>
        <div className="p-1">
          <img src="./logo192.png" alt="logo" className="login-logo p-1 mb-1" />
          <h2 className="teal font-large mb-1">Sign in</h2>
          <form className="card-form" onSubmit={this.handleSubmit}>
            <select
              className={`mb-1 ${value ? "" : "placeholder"}`}
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
    );
  }
}

const mapStateToProps = ({ users }, props) => {
  // Parse URL query string for "qid"
  const search = qs.parse(props.location.search, {
    ignoreQueryPrefix: true,
  });
  const qid = search.qid;

  return {
    users,
    qid,
  };
};

export default connect(mapStateToProps)(SignIn);
