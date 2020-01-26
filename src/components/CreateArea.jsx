import React, { useState } from "react";
import { Form, Input } from 'reactstrap';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import {Container, Row, Col } from 'reactstrap';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick(event) {
    setExpanded(true);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col sm="12"  lg={{ size: 8, offset: 2 }}>
            <Form className="create-note" onClick={handleClick}>
              {isExpanded && (
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={note.title}
                  placeholder="Title"
                />
              )}
              <Input
                type="textarea"
                name="content"
                onClick={handleClick}
                onChange={handleChange}
                value={note.content}
                placeholder="Take a note..."
                rows={isExpanded ? "3" : "1"}
              />
              <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                  <AddIcon />
                </Fab>
              </Zoom>
            </Form>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default CreateArea;
// {
// <Row>
//  <Col xs="auto">.col-auto - variable width content</Col>
// </Row>
// }
