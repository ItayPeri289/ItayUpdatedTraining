import Box from "@mui/material/Box";
import useCartStore from "../../store/cartStore";
import Button from "@mui/material/Button";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import LinearDeterminate from "../ProgressBars/LinearDeterminate";
import BuyDialog from "./BuyDialog";
import ItemsList from "./ItemsList";
import Alert from "@mui/material/Alert";
import Utils from '../../Utils/Utils'

export default function ItemsListPage() {
  const {
    itemsArray,
    removeItemByIndex,
    cartItemsPrice,
    balance,
    reduceBalance,
    cartCount,
  } = useCartStore((state) => state);

  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);

  const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(false);

  const [purchaseSucceeded, setPurchaseSucceeded] = useState<boolean>(false);

  const handleClick = () => {
    if (balance >= cartItemsPrice) {
      setPurchaseSucceeded(true);
      removeAllItemsFromCart();
    }
    setOpenSnackBar(true);
  };

  const handleClose = () => {
    setOpenAlertDialog(false);
  };

  const removeAllItemsFromCart = async () => {
    await Utils.sleep(500);
    reduceBalance(itemsArray[0].price);
    while (itemsArray.length > 0) {
      removeItemByIndex(0);
      reduceBalance(itemsArray[0].price);
      await Utils.sleep(500);
    }
  };

  if (itemsArray.length == 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div> העגלה ריקה</div>
        {openAlertDialog && <BuyDialog handleClose={handleClose} />}
      </div>
    );
  }

  return (
    <Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" onClick={() => handleClick()}>
          הזמן {cartItemsPrice}₪
        </Button>
      </div>
      <ItemsList />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackBar}
      >
        <Box
          sx={{
            padding: 2,
            width: "auto",
            backgroundColor: purchaseSucceeded ? "dodgerblue" : "transparent",
          }}
        >
          {purchaseSucceeded && (
            <LinearDeterminate
              itemsAmount={cartCount}
              setOpenAlertDialog={setOpenAlertDialog}
            />
          )}

          {!purchaseSucceeded && (
            <Alert
              severity="error"
              variant="filled"
              sx={{ width: "50%%" }}
              icon={false}
            >
              ההזמנה לא הושלמה
            </Alert>
          )}
        </Box>
      </Snackbar>
    </Box>
  );
}
