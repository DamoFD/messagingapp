import { io } from "socket.io-client";

const socket = new io(process.env.VITE_REACT_APP_SERVER_URL, {
    autoConnect: false,
    withCredentials: true,
})

export default socket;