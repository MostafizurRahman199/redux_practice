import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UserDetails from "./components/UserDetails/UserDetails";


function App() {
  return (
    <>
      <Navbar/>
      <UserDetails/>
    </>
  );
}

export default App;
