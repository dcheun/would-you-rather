import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

export class QuestionVote extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
  };

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
    const { question, dispatch } = this.props;

    dispatch(handleSaveQuestionAnswer(question.id, value));
  };

  render() {
    const { value } = this.state;
    const { question, author } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="card">
        <div className="card-hdr">
          <h3>{author.name} asks:</h3>
        </div>
        <div className="q-flex-container">
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className="avatar avatar-large mr-1"
          />
          <div className="q-res-container">
            <h2 className="mb-1">Would You Rather ...</h2>
            <form className="card-form" onSubmit={this.handleSubmit}>
              <div className="mb-1">
                <input
                  type="radio"
                  id="optionOne"
                  name="optionGrp"
                  value="optionOne"
                  onChange={this.handleChange}
                />{" "}
                {question.optionOne.text}
              </div>
              <div className="mb-1">
                <input
                  type="radio"
                  id="optionTwo"
                  name="optionGrp"
                  value="optionTwo"
                  onChange={this.handleChange}
                />{" "}
                {question.optionTwo.text}
              </div>
              <button
                className={`btn btn-teal fluid ${value ? "" : "disabled"}`}
                disabled={value === ""}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QuestionVote);
