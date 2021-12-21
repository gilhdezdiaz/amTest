import favoritesReducer from "../../reducers/favoritesReducer";

describe("Reducers", () => {
  test("should return initial state", () => {
    expect(favoritesReducer([], "")).toEqual([]);
  });
  test("should addFavorite", () => {
    const initialState = {
      favorites: [],
    };
    const payload = {
      name: "Gil",
      image: "http://hp-api.herokuapp.com/images/harry.jpg",
    };
    const action = {
      type: "SET_FAVORITES",
      payload,
    };
    const expected = {
      favorites: [
        {
          name: "Gil",
          image: "http://hp-api.herokuapp.com/images/harry.jpg",
        },
      ],
    };
    expect(favoritesReducer(initialState, action)).toEqual(expected);
  });
});
