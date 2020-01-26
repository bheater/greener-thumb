import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import Table from "./Table";

class App extends React.Component {
  render() {
    return (
      <div>
        <ExampleNavbar />
        <Table />
        <Footer />
      </div>
    )
  }
}
export default App
