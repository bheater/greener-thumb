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



</Form>
</Container> */}

// state = {
  //   categories:  [
  //     {
  //         "id": "farm",
  //         "name": "All Farms",
  //         "description": null,
  //         "sequence": 1
  //     },
  //     {
  //         "id": "grp",
  //         "name": "Collapsed Farm Typology",
  //         "description": "Data shown is classified into one of three exclusive categories (typologies) of farms. The typology is based on the occupation of the principal operator and the gross cash farm income of the farming operation.",
  //         "sequence": 2
  //     },
  //     {
  //         "id": "sal",
  //         "name": "Economic Class",
  //         "description": "Data shown is classified into one of five exclusive categories of farm sales. Farm sales include livestock and crop income from cash and marketing contract sales, fees received from livestock and crop production contracts, the net change in CCC loans, and government payments.",
  //         "sequence": 3
  //     },
  //     {
  //         "id": "ftypll",
  //         "name": "Farm Typology",
  //         "description": "Data shown is classified into one of seven exclusive categories (typologies) of farms. The typology is based on gross farm sales, the primary occupation of the operators, and whether the farms are family farms. Beginning in 2011 the versions of the typology are based on gross cash farm income rather than gross sales, and the dollar brackets for the categories were raised as well.",
  //         "sequence": 4
  //     },
  //     {
  //         "id": "age",
  //         "name": "Operator Age",
  //         "description": "Data shown is classified into one of five exclusive categories based on the age of the farm's principal operator.",
  //         "sequence": 5
  //     },
  //     {
  //         "id": "nreg",
  //         "name": "Farm Production Region",
  //         "description": null,
  //         "sequence": 6
  //     },
  //     {
  //         "id": "reg",
  //         "name": "Farm Resource Region",
  //         "description": "Data shown classifies the contiguous U.S. in nine exlusive regions in terms of geographic specialization in production of U.S. farm commodities - see https://www.ers.usda.gov/publications/pub-details/?pubid=42299.",
  //         "sequence": 7
  //     },
  //     {
  //         "id": "n5reg",
  //         "name": "NASS Region",
  //         "description": "Data shown classifies the contiguous U.S. in 5 exclusive regions of adjoining states.",
  //         "sequence": 8
  //     },
  //     {
  //         "id": "spec",
  //         "name": "Production Specialty",
  //         "description": "Data shown classifies farms based on majority of the value of production.",
  //         "sequence": 9
  //     }
  // ]
  // }
