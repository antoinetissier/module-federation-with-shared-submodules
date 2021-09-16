import { NameContext } from "@shared-context/shared-library/src/context/NameContext";
import React from "react";

const Welcome = React.lazy(() => import("app2/Welcome"));

const App = () => (
  <div>
    <h1>Context Provider</h1>
    <h2>App 1</h2>
    <NameContext.Provider value="Billy">
      <React.Suspense fallback="Loading Name">
        <Welcome />
      </React.Suspense>
    </NameContext.Provider>
  </div>
);

export default App;
