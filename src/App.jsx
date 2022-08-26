//import {Message} from './Components/Message/Message.jsx'
import { MessageList } from './Components/MessageList/MessageList.jsx';

import './App.css';

export const App =()=> {

  return (
    <div className="App">
        <form>
          <input type="text" />
          <button type="button">Отправить</button>
        </form>
      <MessageList/>
    </div>
    
  );
}

