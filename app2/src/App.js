import { NameContext } from "@shared-context/shared-library/src/context/NameContext";
import { bar } from "@shared-context/shared-library/src/bar/bar";
import React from "react";
import Welcome from "./Welcome";

const App = () => (
  <div>
    <h1>Context Provider</h1>
    <h2>App 2</h2>
    <h3>{bar}</h3>
    <NameContext.Provider value="Susan">
      <Welcome />
    </NameContext.Provider>
  </div>
);

export default App;
