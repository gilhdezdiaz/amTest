import React, { useState } from "react";
// import Card from "@components/Card";
import Header from "@components/Header";
import CardClass from "../components/CardClass";

const baseUrl = "http://localhost:3000";

const Home = () => {
  const [url, setUrl] = useState(`${baseUrl}/students`);
  const [activeButton, setActiveButton] = useState("students");
  const handleClickFilterButton = (name_button) => {
    setUrl(`${baseUrl}/${name_button}`);
    setActiveButton(name_button);
  };
  return (
    <div className="firstSection">
      <Header
        onClick={(e) => {
          handleClickFilterButton(e.target.name);
        }}
        activeButton={activeButton}
      />
      <div className="card__container">
        <CardClass url={url} />
      </div>
    </div>
  );
};

export default Home;
