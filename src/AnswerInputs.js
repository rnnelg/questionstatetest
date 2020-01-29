import React, { useState } from 'react';
import AnswerInput from './AnswerInput';

const AnswerInputs = () => {

    const [results, setResults] = useState([
        {
            id: 1,
            result: false
        },
        {
            id: 2,
            result: false
        }]
    )

    const handleAnswerEntered = (answer) => {
        let otherResult = results.find(x => x.id != answer.id);

        setResults(
            [
                {
                    id: otherResult.id,
                    result: otherResult.result
                },
                {
                    id: answer.id,
                    result: answer.result
                }
            ]
        );
    }

    return (
        <div>
            <AnswerInput id={1} answer={"abc"} answerEntered={handleAnswerEntered} />
            <AnswerInput id={2} answer={"def"} answerEntered={handleAnswerEntered} />
        </div>
    );
}

export default AnswerInputs;
