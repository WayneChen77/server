import React, { createContext, useState } from "react";
import Getapi from "./compontent/apiaxios";
import Navbar from "./compontent/navbar-compontent";
import Routess from "./compontent/routes-componte";
import Jump from "./compontent/jump-compontent";
export const CurrentContext = createContext(null);
const Top = () => {
  const [currentUser, setCurrentUser] = useState(Getapi.getcurrent() ?? "");

  return (
    <div>
      <CurrentContext.Provider value={[currentUser, setCurrentUser]}>
        <Jump />
        <Navbar />
        <Routess />
      </CurrentContext.Provider>
    </div>
  );
};

export default Top;
