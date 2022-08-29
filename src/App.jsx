import React, { useState } from 'react';
import {Message} from './Components/Message/Message.jsx'
import { MessageList } from './Components/MessageList/MessageList.jsx';
import { UseState } from 'react';
import './App.css';


export const App=()=> {

  const [state,setState] = useState()

  let author = React.createRef()
  let authorText = React.createRef()
  let arr = [author,authorText]

const handleChangeName = (event) => {
  console.log(event.target.value)
}

const handleChangeText = (event) => {
  console.log(event.target.value)
}

const handleSubmit = (event) => {

  console.log(author.current.value)
  console.log(authorText.current.value)
  console.log(arr)



  event.preventDefault();
}


  return (

    <div className="App">

    <form onSubmit = {handleSubmit} >
      <input type="text" onInput = {handleChangeName}  ref={author} />
      <input type="text" onInput = {handleChangeText}  ref={authorText} />
      <button type='submit'>Отправить</button>
    </form>
      <MessageList arr/>
    </div>
  );
}

