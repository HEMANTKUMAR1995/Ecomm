import "./Footer.css";
import { assets_list } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <NavLink to="/">
            <img src={assets_list.logo} alt="" />
          </NavLink>
          <p>
            dlisufhasonfo;ds lahsiduagh aliushiuldg hp;iluhklasnd
            al;suhdliashdklasbnlb
          </p>
          <div className="footer-social-icons">
            <img src={assets_list.facebook_icon} />
            <img src={assets_list.twitter_icon} />
            <img src={assets_list.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>get in touch</h2>
          <ul>
            <li>+91 8117832556</li>
            <li>sample@test.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024©️ Sample.com- All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
