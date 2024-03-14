import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import "./register.scss";
import { useAuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuthContext();

  function handleSign() {
    if (email === "" || password === "") {
      toast.error("Заполните полю!!!");
      return;
    } else {
      if (!email.includes("@gmail.com")) {
        toast.error("Ошибка!!!");
      } else {
        toast.success("Вы Успешно Зарегистрирован.");
        register(email, password);
        setEmail("");
        setPassword("");
      }
    }
  }

  return (
    <Box className="register">
      <ToastContainer />
      <Box className="register--content">
        <h1>Sogn In</h1>
        <Box className="register--text">
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{
              width: "400px",
              marginTop: "40px",
            }}
            id="standard-basic"
            label="@gmail.com..."
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            sx={{
              width: "400px",
            }}
            type="password"
            id="standard-basic"
            label="password..."
            variant="standard"
          />
          <Button
            onClick={() => {
              handleSign();
            }}
            sx={{
              marginTop: " 16px",
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            SOGN IN
          </Button>
          <Button variant="contained">SOGN IN WITH GOOCLE</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
