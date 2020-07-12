import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import io from "socket.io-client";
import SocketContext from './global/SocketContext';

const socket = io(process.env.REACT_APP_SOCKET_SERVER || "http://localhost:5000");

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
