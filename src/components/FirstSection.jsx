import React from "react";
import Header from "./Header";

const FirstSection = ({ children }) => {
  return (
    <>
      <div className="firstSection">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default FirstSection;
