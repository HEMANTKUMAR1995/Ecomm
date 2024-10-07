/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodItem.css";
import { assets_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, URl } =
    useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-iamge-container">
        <img className="food-item-image" src={URl + "/images/" + image} />
        {!cartItems[id] ? (
          <img
            src={assets_list.add_icon_white}
            alt=""
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets_list.remove_icon_red}
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets_list.add_icon_green}
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets_list.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
