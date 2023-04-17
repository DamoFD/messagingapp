import React, { useContext, useRef, useEffect } from "react";
import { FriendContext, MessagesContext } from "../pages/Chat";
import ChatBar from "./ChatBar";

function ChatBox({ value }) {
  const { friendList } = useContext(FriendContext);
  const { messages } = useContext(MessagesContext);
  const bottomDiv = useRef(null);

  useEffect(() => {
    bottomDiv.current?.scrollIntoView();
  })

  const selectedFriend = friendList.find((friend) => friend.username === value);

  if (selectedFriend) {
    return (
      <div className="flex flex-col justify-end h-full">
        <div
          className="flex flex-col-reverse w-full overflow-y-auto flex-grow"
          key={`chat:${selectedFriend.username}`}
          style={{ maxHeight: "calc(100% - 3rem)" }}
        >
            <div ref={bottomDiv}/>
          {messages
            .filter(
              (msg) =>
                msg.to === selectedFriend.userid ||
                msg.from === selectedFriend.userid
            )
            .map((message, idx) => {
              const isFriend =
                message.to === selectedFriend.userid
                  ? "bg-purple-300"
                  : "bg-purple-600";
              return (
                <p
                  className={`text-2xl ${isFriend}`}
                  key={`msg:${selectedFriend.username}.${idx}`}
                >
                  {message.content}
                </p>
              );
            })}
        </div>

        <ChatBar userid={selectedFriend.userid} />
      </div>
    );
  } else if (value === 1) {
    return (
      <div>
        <h1>Person 2</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col-reverse h-full overscroll-y-auto">
        <h1>
          Select a friend from your friends list or Add a Friend to Start
          Chatting!
        </h1>
      </div>
    );
  }
}

export default ChatBox;
