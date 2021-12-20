const INITIAL_STATE = {
  favorites: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        favorites: state.favorites.filter(
          (favorite) => favorite.name !== action.payload
        ),
      };

    default:
      return state;
  }
};
