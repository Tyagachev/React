import React from "react";

export const MessageList= (formProps) => {


    return(
        <>
        <p>{formProps.userArray[0].autor}</p>
        <p>{formProps.userArray[0].text}</p>
            <ul>

            </ul>
        </>
    )
}