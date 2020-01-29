import React from 'react';
import './App.css';
import QuestionContextProvider from './QuestionContext';
import AnswerInputs from './AnswerInputs';

function App() {
  return (
    <QuestionContextProvider>
      <AnswerInputs />
    </QuestionContextProvider>
  );
}

export default App;
