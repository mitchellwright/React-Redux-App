import React from "react";

import HeroSearch from "./components/HeroSearch";
import HeroInfoCard from "./components/HeroInfoCard";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <HeroSearch />
          <HeroInfoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
