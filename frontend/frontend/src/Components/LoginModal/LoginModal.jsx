/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LoginModal.css";
import { assets_list } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import { endPoints } from "../../../../../Admin/vite-project/src/Constants";
import axios from "axios";

const LoginModal = ({ setlogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const { URl, setToken } = useContext(StoreContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newURl = URl;
    if (currentState === "Login") {
      newURl += endPoints.login;
    } else {
      newURl += endPoints.register;
    }
    const response = await axios.post(newURl, userData);
    if (response.data.success) {
      setToken(response?.data?.token);
      localStorage.setItem("token", response?.data?.token);
      setlogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-modal">
      <form className="login-modal-container" onSubmit={onLogin}>
        <div className="login-modal-title">
          <h2>{currentState}</h2>
          <img
            src={assets_list.cross_icon}
            onClick={() => {
              setlogin(false);
            }}
          />
        </div>
        <div className="login-modal-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              required
              placeholder="User Name"
              name="name"
              onChange={onChangeHandler}
              value={userData.name}
            />
          )}

          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={onChangeHandler}
            value={userData.email}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={userData.password}
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-modal-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrentState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginModal;
