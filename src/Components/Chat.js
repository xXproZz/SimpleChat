import * as React from "react";
import './Chat.module.css'
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";


const messages = [
  { id: 1, text: "Hi, welcome to SimpleChat! Go ahead and send me a message.", sender: "bot" },
  { id: 2, text: "You can change your name in JS section!", sender: "Sajad" },
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

  const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
  };

  
  

  return (

    
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ 
        p: 2, 
        backgroundColor: "grey.200",
        borderTopColor:'black',
        borderColor: 'text.primary',
         }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField 
              size="small"
              fullWidth
              placeholder="Enter your message..."
              variant="outlined"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button className="Button"
              fullWidth
              
              variant="contained"
              color="success"
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isBot ? "row" : "row-reverse",
          alignItems: "end",
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? ".main" : ".main" }}>
          {isBot ? "" : ""}
        </Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? ".light" : "primary.light",
            borderRadius: isBot ? "20px 20px 20px 5px" : "20px 20px  5px  20px ",
          }}
        > 
          < Typography tipográfica  = "body1" > {message.text} </ Typography > 
        </ Paper > 
      </ Box > 
    </ Box >
              
  );
};

export default  ChatUI
