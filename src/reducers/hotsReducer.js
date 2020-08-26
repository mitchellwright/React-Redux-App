const initialState = {
  welcome: "Hello World",
};

export const hotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_HERO_START":
      return state;
    case "FETCHING_HERO_SUCCESS":
      return state;
    case "FETCHING_HERO_ERROR":
      return state;
    default:
      return state;
  }
};
