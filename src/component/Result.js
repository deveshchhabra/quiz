
const Result = ({userAnswer,questions,resultQuiz=()=>{}}) => {
    const correctAnswer=userAnswer.filter((answer)=>answer).length;
  return (
    <div className='results'>
        <h2>Result</h2>
        <p>You answer {correctAnswer} out of {questions.length} questions
        <span onClick={resultQuiz} >click to retry</span>
        </p>
    </div>
  )
}

export default Result;
