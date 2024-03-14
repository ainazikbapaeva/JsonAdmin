import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Admin.scss";
import { useProductContext } from "../../context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const { addProduct } = useProductContext();
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit() {
    if (!name.length || !year.length || !image.length) {
      toast.error("Заполните полю!");
    } else {
      toast.success("Продукт успешно добавлен.");
      let obj = {
        name,
        year,
        image,
      };
      addProduct(obj);
      setName("");
      setYear("");
      setImage("");
    }
  }

  return (
    <div id="admin">
      <ToastContainer />
      <div className="admin">
        <h1 className="admin--context">Admin</h1>
        <TextField
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{
            marginTop: "25px",
            width: "500px",
          }}
          id="outlined-basic"
          label="name..."
          variant="outlined"
        />
        <TextField
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          sx={{
            marginTop: "25px",
            width: "500px",
          }}
          id="outlined-basic"
          label="year..."
          variant="outlined"
        />
        <TextField
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          sx={{
            marginTop: "25px",
            width: "500px",
          }}
          id="outlined-basic"
          label="image..."
          variant="outlined"
        />
        <Stack
          sx={{
            marginTop: "30px",
          }}
          direction="row"
          spacing={2}
        >
          <Button
            onClick={handleSubmit}
            sx={{
              width: "400px",
              borderRadius: "40px",
            }}
            variant="outlined"
            color="error"
          >
            create
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Admin;
