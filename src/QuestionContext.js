import React, { Component, createContext } from 'react';

export const QuestionContext = createContext();

class QuestionContextProvider extends Component {

    state = {
        
    };

    constructor(props) {
        super(props);

    }

    handleAnswerEntered = (answer) => {

    }

    handleCheckAnswer = () => {

    }

    render() {
        return (
            <QuestionContext.Provider value={{message: 'hello'}}>
                {this.props.children}
            </QuestionContext.Provider>
        );
    }
}

export default QuestionContextProvider;
