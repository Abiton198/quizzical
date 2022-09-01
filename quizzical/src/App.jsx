import { useState, useEffect } from 'react'
import blob from './assets/img/blob.svg'
import Question from './Question'
import './App.css'
import Menu from './Menu'
import {nanoid} from 'nanoid'

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=21&encode=base64')
    .then(res => res.json())
    .then(data => console.log(data))

    let myQuestions = []
    myQuestions.push({id:nanoid(), question:question.question, correct:question.correct_answer, 
    answers:shuffleArray([question.incorrect_answers])})
  }, [])

  function handleClickAnswer(id, answers){
    setQuestions(questions => questions.map(() => {
      return question.id === id ? {...question, selected:answers} : question
    }))
  }


const questionElement = question ? question.map(question => {
  <Question 
  key={question.id}
  que={question}
  id={question.id}
  handleClickAnswer={handleClickAnswer}
 /> 
}) : []

  return (
    <div className="App">
      <div>    
          <img src={blob} className="blob" alt="" />
      </div>
      < Menu />
     

     {questionElement}

      {/* <pre>{JSON.stringify(questions,null,2)}</pre>  **to see the current State(uncomment)*/} 



      <button className="start-btn">
        check Answers
      </button>
    </div>
  )
}

export default App
