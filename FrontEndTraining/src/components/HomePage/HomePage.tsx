import productsArray from "../../data/Products.json";
import MediaCard from "./MediaCard";
import "./HomePage.css";

const HomePage = () => (
  <div className="items">
    {productsArray.map((item) => (
      <MediaCard
        imageUrl={item.image}
        description={item.description}
        title={item.name}
        price={item.price}
      />
    ))}
  </div>
);

export default HomePage;
