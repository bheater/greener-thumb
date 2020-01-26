import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const ExampleJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead"> Welcome to your</p>
          <h1 className="display-3"><i>inspiration</i> board.</h1>
          <p className="lead">Feel free to jot down any garden ideas and inspiration below.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExampleJumbotron;
