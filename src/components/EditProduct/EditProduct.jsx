import { Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../Admin/Admin.scss";
import "./EditProduct.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const { getOneProduct, oneProduct, saveEditProduct } = useProductContext();

  const { editID } = useParams();
  useEffect(() => {
    getOneProduct(editID);
  }, []);

  function handleSave() {
    if (!name.length || !year.length || !image.length) {
      toast.error("Заполните полю!");
    } else {
      toast.success("Продукт успешно добавлен.");
      let obj = {
        name,
        year,
        image,
      };
      saveEditProduct(editID, obj);
      setName("");
      setYear("");
      setImage("");
    }
  }

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setYear(oneProduct.year);
      setImage(oneProduct.image);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div id="edit">
      <ToastContainer />
      <div className="edit">
        <h1 className="edit--content">EDIT</h1>
        <TextField
          className="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          sx={{
            marginTop: "25px",
            width: "500px",
            color: "red",
          }}
          id="outlined-basic"
          variant="outlined"
          label="name..."
          color="secondary"
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
          color="secondary"
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
          color="secondary"
        />
        <Stack
          sx={{
            marginTop: "30px",
          }}
          direction="row"
          spacing={2}
        >
          <Button
            onClick={() => {
              handleSave();
              navigate(`/menu`);
            }}
            sx={{
              width: "400px",
              borderRadius: "5px",
            }}
            variant="outlined"
            color="success"
          >
            Save
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default EditProduct;
