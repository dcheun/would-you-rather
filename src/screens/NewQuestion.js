import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

export class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(() => ({
      [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      submitted: true,
    }));
  };

  render() {
    const { optionOneText, optionTwoText, submitted } = this.state;
    const { authedUser } = this.props;

    if (!authedUser) {
      return <Redirect to="/signin" />;
    }

    if (submitted) {
      return <Redirect to="/" />;
    }

    return (
      <div className="card">
        <div className="card-hdr center">
          <h2>Create New Question</h2>
        </div>
        <div className="p-1">
          <p className="mb-2">Complete the question:</p>
          <h3 className="mb-1">Would you rather...</h3>
          <form className="card-form" onSubmit={this.handleSubmit}>
            <input
              className="form-text-input"
              type="text"
              placeholder="Enter Option One Text Here"
              name="optionOneText"
              value={optionOneText}
              onChange={this.handleChange}
              required
            />
            <div className="decor-container">
              <span>OR</span>
              <div className="decor-line"></div>
            </div>
            <input
              className="form-text-input"
              type="text"
              placeholder="Enter Option Two Text Here"
              name="optionTwoText"
              value={optionTwoText}
              onChange={this.handleChange}
              required
            />
            <button className="btn btn-teal fluid">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
