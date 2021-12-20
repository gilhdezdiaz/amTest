import React, { useEffect, useState } from "react";
import { FavoriteIcon } from "@icons/icons.js";
import { setFavorites } from "@actions/favoritesActions.js";
import { connect } from "react-redux";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const doFetch = async () => {
      const fetchData = async () => {
        try {
          setIsFetching(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (e) {
          setError(e);
        } finally {
          setIsFetching(false);
        }
      };
      fetchData();
    };
    doFetch();
  }, [url]);
  return {
    data,
    isFetching,
    error,
  };
};

const Card = ({ url, favorites, setFavorites }) => {
  const { data, isFetching, error } = useFetch(url);

  const handleClickAddFavorites = (name, image) => {
    if (
      !favorites.some((favorite) => favorite.name === name) &&
      favorites.length < 5
    ) {
      setFavorites({ name, image });
    }
  };

  if (isFetching) {
    return "Loading...";
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!data) {
    return null;
  }

  return data.map(
    ({
      name,
      image,
      alive,
      house,
      hogwartsStudent,
      dateOfBirth,
      gender,
      eyeColour,
      hairColour,
    }) => (
      <div
        key={name}
        className={`card ${
          alive ? "card__alive-background" : "card__not_alive-background"
        }`}
      >
        <div
          className={`card__image-background card__image-background-${house.toLowerCase()}`}
        >
          <img src={image} alt={name} width="150" height="150" />
        </div>
        <div className="card__section-info">
          <div className="card__section-title-container">
            <div className="card__section-title">
              {alive ? "VIVO" : "FINADO"}/
              {hogwartsStudent ? "ESTUDIANTE" : "STAFF"}
            </div>
            <div
              className="card__section-title-icon"
              onClick={(e) => {
                handleClickAddFavorites(name, image);
              }}
            >
              <FavoriteIcon
                fill={`${
                  favorites.some((favorite) => favorite.name === name)
                    ? "#333333"
                    : "white"
                }`}
                stroke={`${
                  favorites.some((favorite) => favorite.name === name)
                    ? "#333333"
                    : "#999999"
                }`}
                opacity={`${
                  favorites.some((favorite) => favorite.name === name)
                    ? "1"
                    : ".1"
                }`}
              />
            </div>
          </div>
          <div className="card__section-name">{name}</div>
          <div className="card__section-general_info__container">
            <div className="card__section-general_info__item">
              Cumpleaños: <h5>{dateOfBirth}</h5>
            </div>
            <div className="card__section-general_info__item">
              Género: <h5>{gender}</h5>
            </div>
            <div className="card__section-general_info__item">
              Color de ojos: <h5>{eyeColour}</h5>
            </div>
            <div className="card__section-general_info__item">
              Color de pelo: <h5>{hairColour}</h5>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapDispatchToProps = {
  setFavorites,
};

const mapStateToProps = (reudcers) => {
  return reudcers.favoritesReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
