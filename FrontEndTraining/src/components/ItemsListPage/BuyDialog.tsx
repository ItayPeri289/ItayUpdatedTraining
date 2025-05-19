import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface handleThings {
  handleClose: () => void;
}

export default function BuyDialog(props: handleThings) {
  return (
    <Dialog
      open={true}
      onClose={props.handleClose}
      sx={{
        textAlign: "center",
        width: "25rem",
        height: "12rem",
        margin: "auto",
      }}
    >
      <DialogContent>
        <DialogContentText
          id="description"
          sx={{ color: "black", fontSize: "1.2rem" }}
        >
          !תתחדש/י
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "left" }}>
        <Button onClick={props.handleClose}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
}
