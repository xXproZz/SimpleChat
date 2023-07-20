import { Box } from '@mui/material';
import './App.css';
import Chat from './Components/Chat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function App() {
  return (
    <div className="App">
      
     <h3><ChatBubbleIcon  className='App-Icon'/>SimpleChat</h3>
     <Chat />
    </div>
  );
}

export default App;
