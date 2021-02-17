import React, { useEffect, useState } from "react";

// const { ipcRenderer, remote } = require("electron");
const ipc_renderer = window.require("electron").ipcRenderer;
export default function IPC() {
  const [message, setMessage] = useState("");

  const handleResponse = (_event, response) => {
    setMessage(response.message);
  };

  ipc_renderer.on("my-ipc-channel", (event, message) => {
    setMessage(message.message); // Prints 'whoooooooh!'
  });

  return <p>{message}</p>;
}
