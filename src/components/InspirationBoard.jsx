import React, { useState } from "react";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ExampleNavbar from "./Navbar";import { Container, Row, Col } from 'reactstrap';

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
    <p> Welcome to your </p>
    <h2> inspiration board. </h2>
    <p> Feel free to jot down any garden ideas and inspiration below. </p>
    <CreateArea onAdd={addNote} />
    <Container>
      <Row>
        {notes.map((noteItem, index) => {
          return (
            <Col xs="6" sm="4">
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
export default InspirationBoard;
