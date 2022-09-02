import React from 'react'
import { useState, useEffect } from 'react'
import blob from './assets/img/blob.svg'
import Question from './Question'
import './App.css'
import Menu from './Menu'
import {nanoid} from 'nanoid'


function App() {
  const [questions, setQuestions] = useState([])
  const [checked, setChecked] = useState(true)
  const [count, setCount] = useState(0)
  const shuffleArray = (arr) => arr.sort(() => Math.random() -0.5) //shuffle incorrect answers
  const [correct, setCorrect] = useState(true)


  //update state fetching data from open source API
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=21&encode=base64')
    .then(res => res.json())
    .then(data => console.log(data))

    let myQuestions = []
    myQuestions.push({id:nanoid(), question:question.question, correct:question.correct_answer, 
    answers:shuffleArray([question.incorrect_answers])})
  }, [count])

  //updating the questions to new state 
  function handleClickAnswer(id, answers){
    setQuestions(questions => questions.map(() => {
      return question.id === id ? {...question, selected:answers} : question
    }))
  }

  //func () to track of ques attempted true
  function handlePlayAgain(){
    setCount(count => count + 1)
    setChecked(false)
  }

  //updating state of choice in answers
  setCorrect(correct)
  questions.forEach(question => {
    if(question.selected === null){
      selected = false
      return
    }
  })
    if(!selected){
      return
    }

  //a variable that will map over a component
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
      <div className='myBlob'>    
          <img src={blob} className="blob" alt="" />
      </div>
      < Menu />
     
     {questionElement}

      {/* <pre>{JSON.stringify(questions,null,2)}</pre>  **to see the current State(uncomment)*/} 



      <button className="start-btn">
        check Answers
      </button>

      <button className='count'>{handlePlayAgain}</button>

      <div className='myBlob'>    
          <img src={blob} className="blob" alt="" />
      </div>
    </div>
  )
}

export default App
