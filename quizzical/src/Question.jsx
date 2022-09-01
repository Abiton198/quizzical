import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
    let answers = props.myQuestion.answers

    
    function handleClick(answer){
        if (props.myQuestion.checked){
            return question.id === id ? {...question, selected:answers} : question
        }
        props.handleClickAnswer(props.id.answer)
    }

    //variable for answers to be displayed
    const answersElement = answers.map(answer => {
        id = null
        if (props.myQuestion.checked){
           if(props.myQuestion.correct == answer){
            id = 'correct'
           }else if(props.myQuestion.selected === answer){
            id = 'incorrect'
           }else{
            id = 'not selected'
            }
           }   

           //atob() decodes a string of data encoded using Base64
           //button of answers
           return (
            <button key={nanoid} id={id} 
            className={answers === props.myQuestion.selected? 'answer selected' : 'answer'} onClick={() => handleClick(answer)}>
                {atob(answers)} </button>
        )
        }
    )

    return (
        <div className='questions-container'>
            <h3 className='questions'>{atob(props.myQuestion.question)}</h3>
        {answersElement}
        </div>
    )








    return (
        <div className="container-quiz">
        
        
        
        
        
        
        </div>
    )
}
//this page is for fetching questions from API to display on page through use of pops