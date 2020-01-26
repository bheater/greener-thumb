import React from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ExampleNavbar from "./Navbar";
import ExampleJumbotron from "./FluidJumbotron";
import InspirationBoard from "./InspirationBoard";
import Router from "react-router";

class Home extends React.Component{
  render(){
    return (
      <div>
        <ExampleNavbar />
        <ExampleJumbotron />
        <InspirationBoard />
        <Footer />
      </div>
    );
  };
};

export default Home;
