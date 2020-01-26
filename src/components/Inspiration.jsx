import React from "react";
import InspirationBoard from "./InspirationBoard";
import ExampleNavbar from "./Navbar";


class Inspiration extends React.Component{
  render(){
    return(
      <div>
        <ExampleNavbar />
        <InspirationBoard />
      </div>
    );
  };
};
export default Inspiration;
