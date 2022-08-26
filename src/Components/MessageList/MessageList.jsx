import React from "react";

export const MessageList= (formProps) => {
    const messageArray = [
        {
            text:'Какой то текст от',
            autor:'User1'
        }
    ]
    return(
        <>
            <ul>
                {messageArray.map((el,idx)=><li key={idx}>
                    <span>{el.text}</span>
                    <span> {el.autor}</span>
                </li>)}
            </ul>
        </>
    )
}