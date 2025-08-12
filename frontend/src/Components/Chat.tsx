import { Box, Container, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

const Chat = () => {
  const [message, setMessage] = useState("");
const [messages, setMessages] = useState<string[]>([]);

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setMessage(e.target.value);
};


  const handleSend = () => {
    if (!message.trim()) return; // avoid sending empty messages
    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  return (
    <Container
      disableGutters
      sx={{
        width: "100%",
        height: "85%",
        bgcolor: "#fff",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Messages area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "10px",
          alignSelf:'flex-end'
        }}
      >
        {messages.map((msg, i) => (
          <Box key={i} sx={{ mb: 1, bgcolor: "#f0f0f0", p: 1, borderRadius: 2, width: 'fit-content', justifySelf:'flex-end' }}>
            {msg}
          </Box>
        ))}
      </Box>

      {/* Input area */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderTop: "1px solid #ddd",
        }}
      >
        <TextField
          label="Type and press [Enter]"
          variant="standard"
          sx={{ flex: 1 }}
          value={message}
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <IconButton onClick={handleSend}>
          <IoMdSend size={24} color="#4b74f3" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Chat;
