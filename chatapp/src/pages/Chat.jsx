import React from "react";
import Sidebar from "../components/Sidebar";

function Chat() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-1 text-white border-r-2 border-gray-600">
        <Sidebar />
      </div>
      <div className="col-span-2 text-white bg-gray-900">What Up World</div>
    </div>
  );
}

export default Chat;
