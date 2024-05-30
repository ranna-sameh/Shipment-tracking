import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState("");
  const [data, setData] = useState();

  return (
    <Context.Provider value={{ state, setState, data, setData }}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
