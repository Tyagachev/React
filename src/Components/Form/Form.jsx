import React, { useState } from "react";

export const Form = ({addMessage}) => {
    const [text, setText] = useState ('')

    const handleSubmit = (ev)=> {
        ev.preventDefault()
        addMessage(text)
        setText('')
    }


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
            <button>Отправить</button>
        </form>
        <p>{setText}</p>
        </div>
        
    )
}