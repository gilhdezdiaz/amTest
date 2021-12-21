import { setFavorites } from "../../actions/favoritesActions";

describe("Actions", () => {
  test("setFavorites Action", () => {
    const payload = {
      name: "Gil",
      image: "http://hp-api.herokuapp.com/images/harry.jpg",
    };
    const expected = {
      type: "SET_FAVORITES",
      payload,
    };
    expect(setFavorites(payload)).toEqual(expected);
  });
});
