import React, { useState } from 'react';
import './App.css';
import QuestionContextProvider from './QuestionContext';
import AnswerInputs from './AnswerInputs';
import Result from './Result';

function App() {

  const [result, setResult] = useState(false);

  const handleResults = (result) => {
    console.log(`result: ${result}`);
    setResult(result);
  }

  console.log(result);

  return (
    <QuestionContextProvider>
      <AnswerInputs handleResults={handleResults}/>
      <Result finalResult={result.toString()}/>
    </QuestionContextProvider>
  );
}

export default App;
