import {Message} from './Components/Message/Message.jsx'

import './App.css';

export const App =()=> {
  return (

    <div className="App">
      <Message text ='Какой-то текст переданный через props'/>
    </div>
    
  );
}

