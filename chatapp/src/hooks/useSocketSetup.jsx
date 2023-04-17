import React, { useContext, useEffect, useRef } from "react";
import socket from "../util/socket";
import { AccountContext } from "../components/AccountContext";

const useSocketSetup = (setFriendList) => {
  const { setUser } = useContext(AccountContext);
  const friendListRef = useRef(null);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected");
      socket.emit("reconnected");
    });

    socket.on("friends", (friendList) => {
      console.log(friendList);
      friendListRef.current = friendList;
      setFriendList(friendListRef.current);
    });
    socket.on("connected", (status, username) => {
      setFriendList(prevFriends => {
        return [...prevFriends].map(friend => {
          if (friend.username === username) {
            friend.connected = status;
          }
          return friend;
        })
      })

    })

    socket.on("connect_error", () => {
      setUser({ loggedIn: false });
    });

    return () => {
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);
};


export default useSocketSetup;



