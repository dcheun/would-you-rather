import React from "react";
import Question from "./Question";

const QuestionList = ({ questionIds }) => {
  console.log(questionIds);
  return (
    <ul>
      {questionIds &&
        questionIds.map((id) => (
          <li key={id}>
            <Question id={id} />
          </li>
        ))}
    </ul>
  );
};

export default QuestionList;
