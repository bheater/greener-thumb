import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import Table from "./Table";
import SearchForm from "./SearchForm";
import { Container } from 'reactstrap';



class App extends React.Component {
  render() {
    return (
      <div>
        <ExampleNavbar />
        <hr />
        <Container>
          <h2> Search Plants </h2>
          <hr />
          <SearchForm />
          <hr />
          <Table />
        </Container>
        <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <Footer />
      </div>
    );
  };
}
export default App;
