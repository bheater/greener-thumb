import React from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
import CheckboxButtons from "./CheckboxButtons";
import SearchIcon from '@material-ui/icons/Search';
// <Container>
//   <Row>
//   <Col sm="12" md="12">
//     <SearchForm />
//   </Col>
//   </Row>
// </Container>
const SearchForm = (props) => {
  return (
    <Container>
      <Form>
        <Row>
          <Col xs="12" sm="6" md="6">
            <FormGroup>
              <Input type="search" name="searchParam" id="search" placeholder="Plant name, species, etc" />
            </FormGroup>
          </Col>
          <Col xs="8" sm="4" md="4">
            <FormGroup>
              <Input type="text" name="zip" id="zipCode" placeholder="ZIP code (optional)" />
            </FormGroup>
          </Col>
          <Col xs="6" sm="2">
            <Button ><SearchIcon /></Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <CheckboxButtons />
          </Col>
        </Row>



      </Form>
    </Container>
  );
}

export default SearchForm;

// <ButtonGroup>
//   <Button><img src="https://image.flaticon.com/icons/svg/1163/1163662.svg" alt="sunny-img"/></Button>
// </ButtonGroup>
