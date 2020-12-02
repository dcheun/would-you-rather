export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_ANS = "SAVE_USER_ANS";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const saveUserAns = ({ authedUser, qid, answer }) => {
  return {
    type: SAVE_USER_ANS,
    authedUser,
    qid,
    answer,
  };
};
