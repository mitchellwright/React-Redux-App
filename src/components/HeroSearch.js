import React, { useState } from "react";
import { connect } from "react-redux";
import HeroInfoButton from "./HeroInfoButton";

const HeroSearch = () => {
  const [heroInput, setHeroInput] = useState("");

  return (
    <div>
      <label
        htmlFor="hero"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        Choose a hero
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id="hero"
          name="hero"
          value={heroInput}
          onChange={(e) => setHeroInput(e.target.value)}
          className="form-input block w-full sm:text-sm sm:leading-5"
          placeholder="Abathur"
          aria-describedby="hero-name"
        />
      </div>
      <HeroInfoButton heroInput={heroInput} setHeroInput={setHeroInput} />
    </div>
  );
};

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(HeroSearch);
