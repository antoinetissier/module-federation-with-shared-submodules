import { NameContext } from "@shared-context/shared-library";
import React from "react";

const Welcome = () => {
  const name = React.useContext(NameContext);

  return <p>Welcome, {name}</p>;
};

export default Welcome;
