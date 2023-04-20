import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  const navigate = useNavigate();
  useEffect(() => {
    console.log(process.env.REACT_APP_SERVER_URL)
    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      credentials: "include",
    })
      .catch((err) => {
        setUser({ loggIn: false });
        return;
      })
      .then((r) => {
        if (!r || !r.ok || r.status >= 400) {
          setUser({ loggedIn: false });
          return;
        }
        return r.json();
      })
      .then((data) => {
        if (!data) {
          setUser({ loggedIn: false });
          return;
        }
        navigate("/chat");
        setUser({ ...data });
      });
  }, []);
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
