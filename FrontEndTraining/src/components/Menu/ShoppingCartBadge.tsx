import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "../../store/cartStore";

const ShoppingCartBadge = () => {
  const { cartCount } = useCartStore();

  return (
    <Badge badgeContent={cartCount} color="warning">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
};

export default ShoppingCartBadge;
