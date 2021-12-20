import React, { useState } from "react";
import mainLogo from "@img/mainIcon.svg";
import { FavoriteIcon, AddPersonIcon, TrashIcon } from "@icons/icons.js";
import { connect } from "react-redux";
import { deleteFavorite } from "@actions/favoritesActions";
import Modal from "@components/Modal";

const PanelFavorites = ({ favorites, onClick }) => {
  if (favorites.length == 0) {
    return (
      <div className="header__favorites-panel-no-content">
        No hay elementos seleccionados
      </div>
    );
  }
  return favorites.map(({ name, image }) => (
    <>
      <div className="header__favorites-panel-item">
        <img src={image} alt={name} width="30" height="30" />
        <h5>{name}</h5>
        <div onClick={() => onClick(name)} style={{ cursor: "pointer" }}>
          <TrashIcon />
        </div>
      </div>
      <hr />
    </>
  ));
};

const Header = ({ onClick, activeButton, favorites, deleteFavorite }) => {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleClickFavoriteButton = () => setVisible(!visible);
  const handleClickDeleteFavoriteButton = (name) => deleteFavorite(name);
  const handleClickOpenModal = () => setOpenModal(true);
  const handleClickCloseModal = () => setOpenModal(false);
  return (
    <>
      <header>
        <div className="header__button-container">
          <button
            onClick={(e) => handleClickFavoriteButton()}
            className="header__button header__button-favorite"
          >
            Favoritos
            <FavoriteIcon fill="white" />
          </button>
          <button
            onClick={(e) => handleClickOpenModal()}
            className="header__button header__button-add"
          >
            Agregar
            <AddPersonIcon />
          </button>
          <div className="header__favorites-panel">
            {visible && (
              <PanelFavorites
                favorites={favorites}
                onClick={(name) => handleClickDeleteFavoriteButton(name)}
              />
            )}
          </div>
        </div>
      </header>
      <section className="filter__container">
        <img className="filter__icon" src={mainLogo} alt="mainIcon" />
        <div className="filter__title">Selecciona tu filtro</div>
        <div className="filter__button-container">
          <button
            name="students"
            className={`filter__button ${
              activeButton == "students" ? "filter__button-active" : ""
            }`}
            onClick={onClick}
          >
            Estudiantes
          </button>
          <button
            name="staff"
            className={`filter__button ${
              activeButton == "staff" ? "filter__button-active" : ""
            }`}
            onClick={onClick}
          >
            Staff
          </button>
        </div>
      </section>
      {openModal && <Modal onClick={() => handleClickCloseModal()} />}
    </>
  );
};

const mapStateToProps = (reudcers) => {
  return reudcers.favoritesReducer;
};

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
