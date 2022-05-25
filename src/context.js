import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [houseInfo, setHouseInfo] = useState([])
  return (
    <AppContext.Provider value={{ houseInfo, setHouseInfo }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
