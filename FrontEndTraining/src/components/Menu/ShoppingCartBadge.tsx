import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "../../store/cartStore";

export default function ShoppingCartBadge() {
  const cartCount = useCartStore((state) => state.cartCount);

  return (
    <Badge badgeContent={cartCount} color="warning">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}
