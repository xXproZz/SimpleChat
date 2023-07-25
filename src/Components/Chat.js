import * as React from "react";
import './Chat.module.css'
import { createTheme } from '@mui/material/styles';
import image from '../img/ImageChat.jpg';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";


const messages = [
  { id: 1, text1: "Hi, welcome to SimpleChat! Go ahead and send me a message.", sender1: "BOT", time1: "12:45" },
  { id: 2, text2: "You can change your name in JS section!", sender2: "Sajad", time2: "12:46" },
];

const ChatUI = () => {
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      console.log(input);
      setInput("");
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: '#00a152'
      },
      }
      });

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        width: 'auto',
        border: 1,
        borderColor: "lightgrey",
        boxShadow: 3,
        borderRadius: '5px',
      }}
    >
      
      <Box sx={{ 
        flexGrow: 1,
         overflow: "auto",
          p: 1 }}>
        {messages.map((message) => (
        <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ 
        p: 2, 
        backgroundColor: "grey.200",
        border: 1,
        borderColor: "lightgrey",
        boxShadow: 3,
        borderRadius: '5px'
         }}>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <TextField 
              size="small"
              fullWidth  
              placeholder="Enter your message..."
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          
          <Grid item xs={1}>
          <ThemeProvider theme={theme}>
          <Button variant="contained"
          color="secondary"
          size="medium"
          onClick={handleSend}
          >
              Send
          </Button> 
          </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender1 === "BOT";

  return (
    
    // caixas de mensagens
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        
        mb: 2,
      }}
    >
      {/* caixa dos avatares  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "end",
          
        }}
      >
        <Avatar sx={{ bgcolor: "lightgray" }}>
          {isBot ? "" : ""}
        </Avatar>
        
        
        {/* CAIXA DE TEXTO DOS DIÁLOGOS */}
        <Paper
          variant="elevation"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? "#eeeeee" : "#5393ff",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px  5px  20px ",
            
          }}
        > 
          <Box sx={{
            display: "flex",
            justifyContent:"space-between",
          }}>

          < Typography sx={{
            color:'black',
            fontWeight: 'bold',
          }}> {message.sender1} </ Typography >
          < Typography sx={{
            color:'white',
            fontWeight: 'bold',
          }}> {message.sender2} </ Typography > 

           <Grid 
            container
            direction="column-reverse"
            height= {60}
             >
          < Typography sx={{
            color:'black',
          }}> {message.text1} </ Typography >
          < Typography sx={{
            color:'white',
          }}> {message.text2} </ Typography >
            </Grid>

          < Typography sx={{
            color:'black',
          }}> {message.time1} </ Typography > 
          < Typography sx={{
            color:'white',
          }}> {message.time2} </ Typography >  
          </Box>  
        </ Paper > 
      </ Box > 
    </ Box >
              
  );
};

export default  ChatUI
