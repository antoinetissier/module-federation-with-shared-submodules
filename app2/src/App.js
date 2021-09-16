import { NameContext } from "@shared-context/shared-library";
import React from "react";
import Welcome from "./Welcome";

const App = () => (
  <div>
    <h1>Context Provider</h1>
    <h2>App 2</h2>
    <NameContext.Provider value="Susan">
      <Welcome />
    </NameContext.Provider>
  </div>
);

export default App;
