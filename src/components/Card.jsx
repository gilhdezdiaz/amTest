import React, { useEffect, useState } from "react";
import favoriteIcon from "@icons/favoriteIcon.svg";

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

const Card = ({ url }) => {
  const { data, isFetching, error } = useFetch(url);
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
          <img src={image} alt="Girl in a jacket" width="150" height="150" />
        </div>
        <div className="card__section-info">
          <div className="card__section-title">
            {alive ? "VIVO" : "FINADO"}/
            {hogwartsStudent ? "ESTUDIANTE" : "STAFF"}
            <img
              className="card__section-title"
              src={favoriteIcon}
              alt="favoriteIcon"
            />
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

export default Card;
