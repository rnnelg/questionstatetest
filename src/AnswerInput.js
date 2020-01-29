import React, { useState, useContext } from 'react';
import { QuestionContext } from './QuestionContext';

const AnswerInput = (props) => {

  const { actions } = useContext(QuestionContext);

  const interpretAnswer = (inputValue) => {
    
    let result;

    if (inputValue == props.answer) {
      result = true;
    } else {
      result = false;
    }

    return {
      id: props.id,
      result: result
    };
    
  }

  return (
    <div>
      <input
        onChange={event => props.answerEntered(interpretAnswer(event.target.value))}
      />
    </div>
  );
}

export default AnswerInput;