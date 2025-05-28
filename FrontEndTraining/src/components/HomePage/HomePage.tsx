import productsArray from "../../data/Products.json";
import ProductCard from "./ProductCard";

const HomePage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "flex-start",
      gap: "0.7rem",
    }}>
    {productsArray.map((item) => (
      <ProductCard
        imageUrl={item.image}
        description={item.description}
        title={item.name}
        price={item.price}
      />
    ))}
  </div>
);

export default HomePage;
