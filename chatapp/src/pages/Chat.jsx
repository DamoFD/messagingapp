import React, { useState, createContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import useSocketSetup from "../hooks/useSocketSetup";

export const FriendContext = createContext();
export const MessagesContext = createContext();

function Chat() {
  const [tabValue, setTabValue] = useState(null);
  const [friendList, setFriendList] = useState([]);
  const [messages, setMessages] = useState([]);

  console.log("Chat component rendering")

  useEffect(() => {
    console.log("Chat component mounted");
    return () => {
      console.log("Chat component unmounted");
    }
  }, []);

  useSocketSetup(setFriendList, setMessages);

  return (
    <FriendContext.Provider value={{ friendList, setFriendList }}>
    <div className="grid grid-cols-3 h-screen overflow-hidden">
      <div className="col-span-1 text-white border-r-2 border-gray-600 overflow-hidden">
        <Sidebar handleTabChange={setTabValue} />
      </div>
      <div className="col-span-2 text-white bg-gray-900 h-full overflow-hidden">
        <MessagesContext.Provider value={{ messages, setMessages }}>
        <ChatBox value={tabValue}/>
        </MessagesContext.Provider>
      </div>
    </div>
    </FriendContext.Provider>
  );
}

export default Chat;
