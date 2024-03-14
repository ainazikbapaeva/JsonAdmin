import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ el }) => {
  const { deleteProduct } = useProductContext();
  const navigate = useNavigate();
  return (
    <Card className="menu--card" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          borderRadius: "10px",
        }}
        component="img"
        alt="image is not a correct!!!"
        height="260"
        image={el.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.year} - Year
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            deleteProduct(el.id);
          }}
          color="error"
          size="small"
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            navigate(`/edit/${el.id}`);
          }}
          size="small"
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;
