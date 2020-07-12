import { createContext } from "react";
import io from "socket.io-client";

const SocketContext = createContext(io(process.env.REACT_APP_SOCKET_SERVER || "http://localhost:3000"));

export default SocketContext;