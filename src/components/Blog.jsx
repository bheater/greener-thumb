import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import ExampleCardDeck from "./CardDeck";
import Carousel from "./Carousel";

class Blog extends React.Component{
  render(){
    return (
      <div>
        <ExampleNavbar />
        <Carousel />
        <ExampleCardDeck />
        <Footer />
      </div>
    );
  };
};
export default Blog;
