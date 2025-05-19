import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AlertDialog from "./AlertDialog";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "../../store/cartStore";

interface StoreCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export default function MediaCard(props: StoreCard) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Card sx={{ width: "18rem", height: "19rem" }}>
      <CardMedia
        sx={{ height: "8rem" }}
        image={props.imageUrl}
        title={props.title}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "1.1rem" }}
        >
          {props.price}₪
        </Typography>
      </CardContent>
      <br />
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <AlertDialog
          imageUrl={props.imageUrl}
          title={props.title}
          description={props.description}
          price={props.price}
        />
        <Button
          variant="contained"
          onClick={() => addItem(props)}
          sx={{ gap: "0.2rem" }}
        >
          <ShoppingCartIcon />
          הוסף לעגלה
        </Button>
      </CardActions>
    </Card>
  );
}
