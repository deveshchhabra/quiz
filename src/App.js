import "./App.css"
import React, { useState } from 'react'
import Question from './component/Question'
import Result from "./component/Result"
import questions from './contest/question.json'
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  
  const handleNextQestion=(isCorrect)=>{
    setCurrentQuestion(currentQuestion+1);
    setUserAnswer([...userAnswers,isCorrect]);
  };
  const resetQuiz=()=>{
    setCurrentQuestion(0);
    setUserAnswer([]);
  }
  return (
    <div className="app">
      <h1>Quiz</h1>
      {/* Question Component */}
      {currentQuestion < questions.length &&(
      <Question question={questions[currentQuestion]} 
      onAnswerClick={handleNextQestion}/>
      )}
      {/* Answer Component */}
     {/* {console.log(userAnswer)} */}
    {currentQuestion=== questions.length &&(
    <Result 
    userAnswer={userAnswers}
    questions={questions}
    resetQuiz={resetQuiz}
    />
    )}   
    </div>
  )
}

export default App
