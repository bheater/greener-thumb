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
        <h1>What is your dream garden?</h1>
        <h2>Getting Started</h2>
        <p>The following articles will help you get started with the basics of gardening. 
        Caring for plants is incredibly rewarding as you help them thrive for seasons to come.
        </p>
        <ExampleCardDeck />
        <Footer />
      </div>
    );
  };
};
export default Blog;
