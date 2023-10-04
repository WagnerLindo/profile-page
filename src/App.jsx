import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import MyResume from "./Resume";

function App() {
  return (
    <>
      <Header />
      <MyResume />
      <Footer />
    </>
  );
}

export default App;
