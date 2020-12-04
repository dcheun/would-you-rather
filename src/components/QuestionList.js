import React from "react";
import Question from "./Question";

const QuestionList = ({ type, questionIds }) => {
  return (
    <ul>
      {questionIds.length > 0 ? (
        questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))
      ) : (
        <li>
          <p className="center">You have no {type} questions.</p>
        </li>
      )}
    </ul>
  );
};

export default QuestionList;
