import React, { useEffect, useState } from "react";
import Card from "@components/Card";
import FirstSection from "../components/FirstSection";

const Home = () => {
  return (
    <>
      <FirstSection>
        <div className="card__container">
          <Card />
        </div>
      </FirstSection>
    </>
  );
};

export default Home;
