import React from "react";

export const MessageList= (formProps) => {
    let arr1 = [1,2,3,4]

console.log(formProps)

console.log(arr1)
    return(
        
        
        <ul>{

            arr1.map((el,idx)=>{
                <li key={idx}>
                    <p>{el[0]}</p>
                </li>
            })
            /*
            formProps.arr.map((el,idx)=>
            <li key={idx}>
                <p>{el.author}</p>
                <p>{el.text}</p>
            </li>

            )*/

            }
            </ul>
        
    )
}