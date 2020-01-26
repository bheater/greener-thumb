import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ExampleNavbar from "./Navbar";
import ExampleJumbotron from "./FluidJumbotron";
import InspirationBoard from "./InspirationBoard";
import Router from "react-router";


function App() {

  return (
    <div>
      <ExampleNavbar />
      <ExampleJumbotron />
      <InspirationBoard />
      <Footer />
    </div>
  );
}

export default App;
