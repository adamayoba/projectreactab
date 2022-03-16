import React, { useState, useContext, useRef } from "react";

const getFavoris = () => {
  const favoris = localStorage.getItem("favoris");
  return favoris ? JSON.parse(favoris) : [];
};

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const inputRef = useRef(null);
  const [favoris, setFavoris] = useState(getFavoris());
  const [alert, setAlert] = useState({ show: false, msg: "" });
  const [name, setName] = useState("");
  const [filter, setFilter] = useState("all");
  const [location, setLocation] = useState({});
  const refContainer = useRef(null);

  const removeFavori = (name) => {
    setFavoris(favoris.filter((favori) => favori.name.common !== name));
    showAlert(true, "Favori Removed.");
  };

  const toggleDone = (name) => {
    setFavoris(
      favoris.map((favori) =>favori.name.common)
    );
    showAlert(true, "Favori Successfull Add.");
  };


  const showAlert = (show, msg) => {
    setAlert({ show, msg });
  };

  return (
    <AppContext.Provider
      value={{
        favoris,
        setFavoris,
        removeFavori,
        toggleDone,
        refContainer,
        alert,
        showAlert,
        name,
        setName,
        getFavoris,
        filter,
        setFilter,
        inputRef,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };