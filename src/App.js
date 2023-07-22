import './App.css';
import Chat from './Components/Chat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Grid } from '@mui/material';

function App() {
  return (
    <div className="App">

    <Box sx={{
      p: 1,
      backgroundColor: "grey.200",
    }}> 
    <Grid 
    container
    direction="row"
    justifyContent="space-between"
    alignItems="center" >
      <h3><ChatBubbleIcon  className='App-Icon'/>SimpleChat</h3>
      <SettingsIcon  className='App-IconSettings'
      />
    </Grid>
    
    </Box>
     <Chat />
    </div>
  );
}

export default App;
