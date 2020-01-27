import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import ExampleJumbotron from "./FluidJumbotron";
import ExampleCardColumns from "./CardColumns";

class Articles extends React.Component{
  render(){
    return (
      <div>
        <ExampleNavbar />
        <ExampleJumbotron />
        <ExampleCardColumns />
        <Footer />
      </div>
    );
  };
};
export default Articles;
