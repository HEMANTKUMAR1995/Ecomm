import "./AppDownload.css";
import { assets_list } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience Download <br /> app
      </p>
      <div className="download-platforms">
        <img src={assets_list.play_store} />
        <img src={assets_list.app_store} />
      </div>
    </div>
  );
};

export default AppDownload;
