import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ExampleJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead"> Become a </p>
          <h1 className="display-3"><i>better</i> gardener.</h1>
          <p className="lead">The <strong>greener thumb</strong> helps you find plants that will thrive in every climate and condition!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExampleJumbotron;
