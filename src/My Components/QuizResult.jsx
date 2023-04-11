import './QuizResult.css'
import React from 'react'

const QuizResult = (props) => {
  return (
    <div className='container' >
      <h2>Your score is {props.score} <br /> Check The Solution Below</h2>
      <div className="questions">
        {props.quizData.map((item)=>(
            <div key={item.id} className='container'>
            <div>{item.question}</div>
            <h4>{item.answer}</h4>
            </div>
        ))}
      </div>
    </div>
  )
}

export default QuizResult
