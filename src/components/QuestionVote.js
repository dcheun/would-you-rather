import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/questions";

export class QuestionVote extends Component {
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
    const { question, author } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="card question">
        <div className="card-section plr-20 bg-gray">
          <h3>{author.name} asks:</h3>
        </div>
        <div className="card-q-body card-section plr-20">
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author.name}`}
            className="avatar avatar-large"
          />
          <div className="ml-1 card-form-container">
            <h2>Would You Rather ...</h2>
            <form className="card-form" onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="radio"
                  id="optionOne"
                  name="optionGrp"
                  value="optionOne"
                  onChange={this.handleChange}
                />{" "}
                {question.optionOne.text}
              </div>
              <div>
                <input
                  type="radio"
                  id="optionTwo"
                  name="optionGrp"
                  value="optionTwo"
                  onChange={this.handleChange}
                />{" "}
                {question.optionTwo.text}
              </div>
              <button className="btn btn-teal fluid">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(QuestionVote);
