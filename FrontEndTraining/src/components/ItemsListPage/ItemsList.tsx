import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import useCartStore from "../../store/cartStore";

const ItemsList = () => {
  const { cartItemsArray: cartItemsArray, removeItemByIndex } = useCartStore(
    (state) => state
  );

  return (
    <Box>
      {cartItemsArray.map((item, index) => (
        <Box>
          <Grid size={{ xs: 6, md: 8 }}>
            <List>
              <ListItem
                secondaryAction={
                  <Box
                    sx={{ display: "flex", gap: "1rem", alignItems: "center" }}
                  >
                    <ListItemText
                      sx={{ textAlign: "right" }}
                      primary={item.title}
                      secondary={`${item.price}₪`}
                    />
                    <Avatar>
                      <img src={item.imageUrl} width={"45rem"} />
                    </Avatar>
                  </Box>
                }
              >
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeItemByIndex(index)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default ItemsList;
