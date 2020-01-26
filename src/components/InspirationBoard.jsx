import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import InspirationJumbotron from "./InspirationJumbotron"
import { Container, Row, Col } from 'reactstrap';

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
export default InspirationBoard;
