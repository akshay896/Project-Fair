import React, { createContext, useState } from "react";
export const addResponseContext = createContext("");
export const editResponseContext = createContext();

const ContextAPI = ({ children }) => {
  const [addResponse, setAddResponse] = useState("");
  const [editResponse, setEdtResponse] = useState("");
  return (
    <>
      <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
        <editResponseContext.Provider value={{editResponse,setEdtResponse}}>{children}</editResponseContext.Provider>
      </addResponseContext.Provider>
    </>
  );
};

export default ContextAPI;
