import React, { useState } from "react";
// import InspirationBoard from "./InspirationBoard";
import ExampleNavbar from "./Navbar";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import InspirationJumbotron from "./InspirationJumbotron"
import { Container, Row, Col, Jumbotron  } from 'reactstrap';


class Inspiration extends React.Component{
  render(){
    return(
      <div>
        <ExampleNavbar />
        <InspirationBoard />
        <Footer />
      </div>
    );
  };
};
export default Inspiration;

const inspirationStyle = {
  backgroundColor: '#ccc',
}

const InspirationJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid style={inspirationStyle}>
        <Container fluid>
          <p className="lead"> Welcome to your</p>
          <h1 className="display-3"><strong>inspiration</strong> board.</h1>
          <p className="lead">Capture ideas fundamental to your ideal garden retreat.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export { InspirationJumbotron};

function InspirationBoard(){
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return(
    <div>
    <InspirationJumbotron />
    <h1 className="lead">How does nature inspire and captivate you?</h1>
    <Container fluid>
      <Row >
        <Col xs="12" sm="12" md="6" lg="6" xl ="6">
        <Carousel />

        </Col>
        <Col xs="12" sm="12" md="6" lg="6" xl ="6">

         <CreateArea onAdd={addNote} />
        </Col>

        {notes.map((noteItem, index) => {
          return (
            <Col xm="12" sm="2" md={{ size: 'auto', offset: 1 }}>
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            </Col>
          );
        })}
        </Row>
      </Container>
      </div>
  );
}
export { InspirationBoard};
