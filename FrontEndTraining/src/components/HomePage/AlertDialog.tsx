import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import InfoIcon from "@mui/icons-material/Info";
import useCartStore from "../../store/cartStore";
import { useState } from "react";

interface StoreCard {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export default function AlertDialog(props: StoreCard) {
  const addItem = useCartStore((state) => state.addItem);

  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
        sx={{ gap: "0.3rem" }}
      >
        <InfoIcon />
        פרטים
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={props.title}
        aria-describedby={props.description}
        sx={{ textAlign: "right", width: "25rem", margin: "auto" }}
      >
        <DialogTitle id="title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="description">
            {props.description}
          </DialogContentText>
          <DialogContentText id="price">מחיר: {props.price}₪</DialogContentText>
        </DialogContent>
        <CardMedia
          sx={{
            height: "15rem",
            width: "16rem",
            backgroundSize: "contain",
            backgroundPosition: "right",
            margin: "1rem",
          }}
          image={props.imageUrl}
          title={props.title}
        />
        <DialogActions sx={{ display: "flex", justifyContent: "left" }}>
          <Button onClick={handleClose}>סגור</Button>
          <Button
            onClick={() => {
              handleClose();
              addItem(props);
            }}
            autoFocus
          >
            {" "}
            הוסף לעגלה
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// add a space between the icon and text in buttons
