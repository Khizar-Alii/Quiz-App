import QuizView from './QuizView'
import React, { useState } from 'react'
import './Home.css'


const Home = () => {
  const [showQuizComponent, setShowQuizComponent] = useState(false)

  const handleClick = () => {
    setShowQuizComponent(true)
  }
    
  return (
    <div className='Home'>
      <h1>Welcome to My Quiz</h1>
      

      {!showQuizComponent && (
        <div className='start-quiz-container'>
          <button className='btn-quiz' onClick={handleClick}>
            Start Quiz
          </button>
        </div>
      )}

      {showQuizComponent && <QuizView />}
    </div>
  )
}

export default Home
