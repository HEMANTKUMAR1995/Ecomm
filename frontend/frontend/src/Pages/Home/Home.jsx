import { useState } from "react";
import Header from "../../Components/Header/Header";
import MenuExplore from "../../Components/MenuExplore/MenuExplore";
import "./Home.css";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div className="">
      <Header />
      <MenuExplore category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
