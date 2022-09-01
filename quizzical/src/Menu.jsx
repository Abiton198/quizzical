import React from "react";
import { useState } from "react";

export default function Menu(props) {
    const [count, setCount] = useState(0)


    return (
        <div className="container">
        
            <div className="app-content">
                <h1 className="title">Quizzical</h1>
                <p className="description">Some description if needed</p>
                
                <button className="play-btn" onClick={() => props.start()} 
                onMouseOver={() => setCount((count) => count + 1)} > Start Game {count}</button>

  
            
            </div>
        
        </div>
        
    )
}
// want start button if clicked to direct to the quiz questions