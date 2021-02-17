import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import IPC from "./components/IPC"
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <IPC />
    </div>
  );
}

export default App;
