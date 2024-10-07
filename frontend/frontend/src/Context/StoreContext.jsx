/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";
import { useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFood_list] = useState();
  const [imageData, setImageData] = useState({});
  // const [setTokenBackUp, setSetTokenBackUp] = useState({ token: "" });
  const URl = "http://localhost:8080";

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const cartTotalCartAmt = () => {
    let totalAmt = 0;
    // cartItems is object so we are using for in
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInformation = food_list?.find(
          (product) => product._id === item
        );
        totalAmt += itemInformation?.price * cartItems[item];
      }
    }
    return totalAmt;
  };

  /* function avoidLoginOnPageReload() {
    if (window?.localStorage) {
      var windowData = window?.localStorage?.token;
      setSetTokenBackUp(windowData);
    }
    if (!window.localStorage) {
    }
    return windowData;
    // console.log(setTokenBackUp);
  }

  to get data from server instead of static/local

  const fetchFoodData = axios.fetch(`${URL}/api/v1/food/getFoodList`);
  fetchFoodData.then((response) => {
    console.log(response);

    // setFood_list()
  });
*/
  const fetchFoodData = async () => {
    const response = await axios.get(URl + "/api/v1/food/getFoodList");
    setFood_list(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodData();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItem,
    cartTotalCartAmt,
    URl,
    token,
    setToken,
    imageData,
    setImageData,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props?.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
