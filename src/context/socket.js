import React from "react";
import io from "socket.io-client";

const APP_URL_BACKEND = process.env.REACT_APP_BACKEND_URL;

export const socket = io(APP_URL_BACKEND);

export const SocketContext = React.createContext();
