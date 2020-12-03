import { showLoading, hideLoading } from "react-redux-loading";
import { saveQuestion, saveQuestionAnswer } from "../apis/api";
import { addUserQuestion, saveUserAns } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANS = "SAVE_QUESTION_ANS";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText) => async (
  dispatch,
  getState
) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  try {
    const question = await saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    });
    dispatch(addQuestion(question));
    dispatch(addUserQuestion(question));
  } catch (err) {
    console.log(err);
  }
  dispatch(hideLoading());
};

function saveQuestionAns({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANS,
    authedUser,
    qid,
    answer,
  };
}

export const handleSaveQuestionAnswer = (qid, answer) => async (
  dispatch,
  getState
) => {
  const { authedUser } = getState();
  const info = {
    authedUser,
    qid,
    answer,
  };
  dispatch(showLoading());
  try {
    await saveQuestionAnswer(info);
    dispatch(saveQuestionAns(info));
    dispatch(saveUserAns(info));
  } catch (err) {
    console.log(err);
  }
  dispatch(hideLoading());
};
