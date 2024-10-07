/* eslint-disable react/prop-types */
import "./MenuExplore.css";
import { menu_list } from "../../assets/assets";

const MenuExplore = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore menu</h1>
      <p className="explore-menu-text">
        soapud masoifmopasiyfdnasipougdpm,x;o piuxgpisdufpmoap anpiug alis rtpa
        ao88yd
      </p>
      <div className="explore-menu-list">
        {menu_list?.map((item, index) => {
          return (
            <div
              className="explore-menu-list-item"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default MenuExplore;
