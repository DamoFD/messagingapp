import React, { useState, createContext } from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

export const FriendContext = createContext();

function Chat() {
  const [tabValue, setTabValue] = useState(null);
  const [friendList, setFriendList] = useState([
    { username: "John Doe", connected: false },
    { username: "Ryan Reynolds", connected: true},
    { username: "Ryan Reynolds", connected: true},
  ]);

  return (
    <FriendContext.Provider value={{ friendList, setFriendList }}>
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-1 text-white border-r-2 border-gray-600">
        <Sidebar handleTabChange={setTabValue} />
      </div>
      <div className="col-span-2 text-white bg-gray-900">
        <ChatBox value={tabValue}/>
      </div>
    </div>
    </FriendContext.Provider>
  );
}

export default Chat;