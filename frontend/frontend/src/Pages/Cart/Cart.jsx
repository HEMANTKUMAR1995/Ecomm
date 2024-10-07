import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";
import { cartItemTitles } from "../../../../../Admin/vite-project/src/Constants";
import axios from "axios";

function Cart() {
  const { removeFromCart, food_list, cartItems, cartTotalCartAmt, URl } =
    useContext(StoreContext);

  function getCartDetails() {
    const cab = axios.get(URl + "/api/v1/cart/add");
    cab
      .then((res, rej) => {
        const value = res.json();
        console.log("***", value);
      })
      .catch((err) => console.log(err));
  }
  getCartDetails();
  const navigate = useNavigate();
  const cartTitleArray = Object.values(cartItemTitles);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          {cartTitleArray?.map((val, index) => {
            return <p key={index}>{val}</p>;
          })}
          {/* <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p> */}
        </div>
        <br />
        <hr />
        {food_list?.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item" key={index}>
                  <img src={URl + "/images/" + item?.image} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${cartTotalCartAmt()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${cartTotalCartAmt() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${cartTotalCartAmt() === 0 ? 0 : cartTotalCartAmt() + 2}</b>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/order");
            }}
          >
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder="Pormo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
