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



const InspirationJumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
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
    <Carousel />
    <h1 className="lead">How does nature inspire and captivate you?</h1>
    <CreateArea onAdd={addNote} />
    <Container>
      <Row>
        {notes.map((noteItem, index) => {
          return (
            <Col sm={{ size: 'auto', offset: 1 }}>
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
