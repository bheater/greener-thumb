import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import { Jumbotron, Container } from 'reactstrap';



const imgUrl = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80"
const backgroundImgStyle = {
  backgroundImage: 'url('+imgUrl+')',
  color: 'white',
}

class App extends React.Component {
  render() {

    return (
      <div >
        <ExampleNavbar />
        <Jumbotron fluid style={backgroundImgStyle}>
          <Container fluid >
            <p className="lead"> Welcome to the </p>
            <h1 className="display-3" ><i>Greener Thumb</i>.</h1>
            <p className="lead">Learn to cultivate your garden retreat.</p>
          </Container>
        </Jumbotron>
        <h1  className="display-4">Garden Design</h1>
      

        <Footer />
      </div>
    );
  }

}

export default App;
