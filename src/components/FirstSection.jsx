import React from "react";

const FirstSection = ({ children }) => {
  return (
    <>
      <div className="firstSection">
        <main>{children}</main>
      </div>
    </>
  );
};

export default FirstSection;
