import React, { useContext, useEffect } from "react";
import socket from "../util/socket";
import { AccountContext } from "../components/AccountContext";

const useSocketSetup = () => {
    const {setUser} = useContext(AccountContext);
    useEffect(() => {
        socket.connect();
        socket.on("connect_error", () => {
            setUser({loggedIn: false})
        })
        return () => {
            socket.off("connect_error");
        }
    }, [setUser]);
};

export default useSocketSetup;