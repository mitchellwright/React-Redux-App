const initialState = {
  name: "Abathur",
  role: "Specialist",
  type: "Melee",
  iconUrl: "http://s3.hotsapi.net/img/heroes/92x93/abathur.png",
  abilities: [
    {
      title: "Locust Strain",
      description:
        "Spawns a Locust to attack down the nearest lane every 15 seconds. Locusts last for 16 seconds, have 316 (+4% per level) health and deal 46 (+4% per level) damage with each Basic Attack.",
    },
    {
      title: "Carapce",
      description:
        "Shields the assisted ally for 150 (+4% per level). Allied Heroes are healed for 22 (+4% per level) Health per second while the Shield is active. Lasts for 6 seconds.",
    },
  ],
  isFetching: false,
  error: "",
};

export const hotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_HERO_START":
      console.log("fetching hero start reducer");
      return { ...state, isFetching: true };
    case "FETCHING_HERO_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        type: action.payload.type,
        iconUrl: action.payload.icon_url["92x93"],
        abilities: action.payload.abilities,
        isFetching: false,
      };
    case "FETCHING_HERO_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
