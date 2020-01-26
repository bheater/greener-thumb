import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const InspirationJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <p className="lead"> Welcome to your</p>
          <h1 className="display-3"><strong>inspiration</strong> board.</h1>
          <p className="lead">Feel free to jot down any garden ideas below.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default InspirationJumbotron;
