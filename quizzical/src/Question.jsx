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







    return (
        <div className="container-quiz">
        
        
        
        
        
        
        </div>
    )
}
//this page is for fetching questions from API to display on page through use of pops