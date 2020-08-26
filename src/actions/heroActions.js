import axios from "axios";

export const getHero = () => (dispatch) => {
  console.log("getHero action");
  dispatch({ type: "FETCHING_HERO_START" });
  axios
    .get(`https://hotsapi.net/api/v1/heroes/${dispatch.payload}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
};
