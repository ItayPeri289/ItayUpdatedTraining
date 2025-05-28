import productsArray from "../../data/Products.json";
import ProductCard from "./ProductCard";
import "./HomePage.css";

const HomePage = () => (
  <div className="items">
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
