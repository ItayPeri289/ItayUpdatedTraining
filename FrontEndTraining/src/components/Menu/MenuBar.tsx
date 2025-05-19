import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartBadge from "./ShoppingCartBadge";
import useCartStore from "../../store/cartStore";

export default function MenuBar() {
  const balance = useCartStore((state) => state.balance);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <ShoppingCartBadge />
        <Typography
          variant="h6"
          align="right"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          {balance}₪ :סכום כולל
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
