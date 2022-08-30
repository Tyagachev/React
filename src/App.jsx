import React, { useState } from 'react';
import {Message} from './Components/Message/Message.jsx'
import { MessageList } from './Components/MessageList/MessageList.jsx';
import { Form } from './Components/Form/Form.jsx';

import './App.css';


export const App=()=> {
const [messages,setMessages] = useState([])



  return (
    <div className="App">
      <Message />
      <Form addMessage={setMessages}/>
      <MessageList messages ={messages}/>
    </div>
  );
}

