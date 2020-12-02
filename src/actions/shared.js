import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../apis/api";
import { setAuthedUser } from "./authedUser";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

export const handleInitialData = () => async (dispatch) => {
  try {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser("tylermcginnis"));
    dispatch(hideLoading());
  } catch (error) {
    console.log(error);
  }
};
