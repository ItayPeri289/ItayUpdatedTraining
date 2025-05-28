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
import { StoreCard } from "../../Interfaces";

interface AlertDialogProps extends StoreCard {}

const AlertDialog = (props: AlertDialogProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        color="secondary"
        variant="contained"
        onClick={handleClick}
        sx={{ gap: "0.3rem" }}>
        <InfoIcon />
        פרטים
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClick}
        sx={{ textAlign: "right", width: "25rem", margin: "auto" }}>
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
          <Button onClick={handleClick}>סגור</Button>
          <Button
            onClick={() => {
              handleClick();
              addItem(props);
            }}
            autoFocus>
            הוסף לעגלה
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
