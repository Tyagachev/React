//import {Message} from './Components/Message/Message.jsx'
import { MessageList } from './Components/MessageList/MessageList.jsx';

import './App.css';

export const App =()=> {

  const autorName = '1'
  const authorText ='2'
  console.log (autorName)

  return (

    <div className="App">
        <form>
          <input type="text" onChange={autorName} />
          <input type="text" />
          <button type="button">Отправить</button>
        </form>


      <MessageList userArray={[{
        autor:autorName,
        text: authorText
      }]}/>

          
    </div>
  );
}

