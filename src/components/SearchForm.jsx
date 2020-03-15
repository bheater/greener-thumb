import React,{useState} from 'react';
import { Button, Form, FormGroup, Input, Container, Row, Col, InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import CheckboxButtons from "./CheckboxButtons";
import SearchIcon from '@material-ui/icons/Search';
import Categories from "./Categories";

console.log(process.env.REACT_APP_ERS_ARMS_API_KEY);


const SearchForm = (props) => {
  const [state, setState] = useState({categories:[]});

  function componentDidMount() {
    fetch("https://phzmapi.org/20001.json")
    .then(res => res.json())
    .then((data) => {
      setState({ categories: data })
      console.log(data);
    })
    .catch(console.log)
    // .finally(console.log(REACT_APP_ERS_BASE_URL+"arms/category?/api_key="+REACT_APP_ERS_ARMS_API_KEY))
  }


  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Container>
      <Categories categories={state.categories} />
      <Form>
        <Row>
          <Col xs="12" sm="6" md="4">
            <FormGroup>
              <Input type="search" name="searchParam" id="search" placeholder="Plant name, species, etc" />
            </FormGroup>
          </Col>
          <Col xs="8" sm="4" md="3">
            <FormGroup>
              <Input type="text" name="zip" id="zipCode" placeholder="ZIP code (optional)" />
            </FormGroup>
          </Col>
          <Col xs="2">
            <InputGroup>
              <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                <DropdownToggle caret outline>
                  State
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Select a state</DropdownItem>
                  <DropdownItem>AL</DropdownItem>
                  <DropdownItem>AZ</DropdownItem>
                  <DropdownItem>CA</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Not Applicable</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
            </InputGroup>
          </Col>
          <Col xs="6" sm="2">
            <Button onClick={componentDidMount} ><SearchIcon /></Button>
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


{/* <Container>
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


