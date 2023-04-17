import React, { useContext, useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import CircleIcon from "@mui/icons-material/Circle";
import { Avatar } from "@mui/material";
import { FriendContext } from "../pages/Chat";
import AddFriendModal from "./AddFriendModal";

const Sidebar = ({ handleTabChange }) => {
  const { friendList } = useContext(FriendContext);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col pt-10 pb-2">
        <div className="flex justify-center">
          <h2 className="text-3xl mr-10 ml-14">Add Friend</h2>
          <button
            onClick={handleModalOpen}
            className="bg-gray-900 w-12 h-12 rounded-lg"
          >
            <ChatIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </div>
        <hr className="m-6 border-gray-600" />
        {friendList.map((friend) => (
          <div
            className="flex items-center border-2 border-b-4 border-gray-700 m-10 mb-0 mt-2 pt-2 pb-2 border-b-purple-600 cursor-pointer hover:bg-gray-600"
            onClick={() => handleTabChange(0)}
            key={`friend:${friend}`}
          >
            <Avatar className="ml-10" />
            <p className="ml-2 text-xl">{friend.username}</p>
            <div className="flex-grow" />
            <CircleIcon
              className="justify-self-end mr-4"
              sx={{
                color: friend.connected ? "green" : "red",
                height: "20px",
                width: "20px",
              }}
            />
          </div>
        ))}
      </div>
      <AddFriendModal open={modalOpen} handleClose={handleModalClose} />
    </>
  );
};

export default Sidebar;
