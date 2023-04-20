import { io } from "socket.io-client";

const socket = new io('https://damion-chat-app.onrender.com', {
    autoConnect: false,
    withCredentials: true,
})

export default socket;