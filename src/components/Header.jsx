import React from "react";
import mainLogo from "@img/mainIcon.svg";
import favoriteIcon from "@icons/favoriteIcon.svg";
import addIcon from "@icons/addIcon.svg";

const Header = () => {
  return (
    <>
      <header>
        <button className="header__button header__button-favorite">
          Favoritos
          <img
            className="header__button-icon"
            src={favoriteIcon}
            alt="favoriteIcon"
          />
        </button>
        <button className="header__button header__button-add">
          Agregar
          <img className="header__button-icon" src={addIcon} alt="addIcon" />
        </button>
      </header>
      <section className="filter__container">
        <img className="filter__icon" src={mainLogo} alt="mainIcon" />
        <div className="filter__title">Selecciona tu filtro</div>
        <div className="filter__button-container">
          <button className="filter__button">Estudiantes </button>
          <button className="filter__button">Staff </button>
        </div>
      </section>
    </>
  );
};

export default Header;
