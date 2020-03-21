import React from 'react';
import { Jumbotron, Container } from 'reactstrap';


const imgUrl = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80"
const backgroundImgStyle = {
  backgroundImage: 'url('+imgUrl+')',
  color: 'white',
}
const ExampleJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid style={backgroundImgStyle}>
        <Container fluid>
          <p className="lead"> Become a </p>
          <h1 className="display-3"><i>better</i> gardener.</h1>
          <p className="lead">Find plants that will thrive in your climate. </p>
          <p className="lead">Design and cultivate your garden retreat.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExampleJumbotron;
