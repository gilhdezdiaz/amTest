import React from "react";
import { FavoriteIcon } from "../assets/icons/icons";
import { setFavorites } from "../actions/favoritesActions";
import { connect } from "react-redux";

class CardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isFetching: false,
      error: null,
    };
  }

  fetchData = async (url) => {
    try {
      this.setState({ isFetching: true });
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      setError(e);
    } finally {
      this.setState({ isFetching: false });
    }
  };

  handleClickAddFavorites = (name, image) => {
    if (
      !this.props.favorites.some((favorite) => favorite.name === name) &&
      this.props.favorites.length < 5
    ) {
      this.props.setFavorites({ name, image });
    }
  };

  componentDidMount() {
    this.fetchData(this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.fetchData(nextProps.url);
    }
  }

  render() {
    const { data, isFetching, error } = this.state;
    const { favorites } = this.props;

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
            className={`card__image-background card__image-background-${
              house && house.toLowerCase()
            }`}
          >
            <img
              src={image}
              alt={name}
              width="150"
              height="150"
              style={{ objectFit: "cover" }}
            />
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
                  this.handleClickAddFavorites(name, image);
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
  }
}

const mapDispatchToProps = {
  setFavorites,
};

const mapStateToProps = (reudcers) => {
  return reudcers.favoritesReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(CardClass);
