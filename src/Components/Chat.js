import * as React from "react";
import './Chat.module.css'
import { createTheme } from '@mui/material/styles';
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
  { id: 1, text: "Hi, welcome to SimpleChat! Go ahead and send me a message.", sender: "bot", time: "12:45" },
  { id: 2, text: "You can change your name in JS section!", sender: "Sajad", time: "12:46" },
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
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        border: 1,
        borderColor: "lightgrey",
        boxShadow: 3,
        borderRadius: '5px',
      }}
    >
      <Box sx={{ flexGrow: 1,
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
        <Grid container spacing={1}
        backgroundColor=''>
          <Grid item xs={11}
          >
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
  const isBot = message.sender === "bot";

  return (
    
    // caixas de mensagens
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
      
        mb: 2,
      }}
    >
      {/* caixa dos avatares redondos */}
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
            alignSelf:"end",
            
          }}>
          < Typography > {message.sender} </ Typography > 
          
           <Grid 
            container
            direction="row"
            alignContent='end'
            height= {60}
             >
          < Typography > {message.text} </ Typography >
            </Grid>
          < Typography > {message.time} </ Typography > 
            
          </Box>  
        </ Paper > 
      </ Box > 
    </ Box >
              
  );
};

export default  ChatUI
