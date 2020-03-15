import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import ExampleJumbotron from "./FluidJumbotron";
import {ButtonGroup, Container, Row, Col,Button, Input} from 'reactstrap';
import SearchIcon from '@material-ui/icons/Search';
// import Axios from 'axios';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

// function getRequest(){
//   const zip = '20001'
//   Axios.get('https://phzmapi.org/'+zip+'.json')
//   .then((response) => {
//     console.log(JSON.parse(response.data));
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });
// };
function handleClick(){
  console.log("Searach button clicked");
}

var zip = "";

class About extends React.Component{
  state = {
    zip: "",
    usdaResp: {}

  }

  render(){
    return (
      <div>
        <ExampleNavbar />
        <ExampleJumbotron />
        {/* <p>The <strong>greener thumb</strong> will guide you through the process to create the garden of your dreams.</p> */}

        <Container className="themed-container" fluid={true}>
          <h1 className="display-4">the process</h1>
          <p>The health of your plants depends on their environment. </p>
          <p>Find plants that thrive in you area, based on setting, climate, and exposure to sunlight.</p>
          
          <h2>where?</h2>
          
          <p>Where will your plants grow?</p>
          <Container>

            <Row>
              <Col md="6">
               <h3>indoors</h3>
               <p className="lead" >Tropical plants tend do well indoors, due to minimal temperature fluctuations.</p>
               <p>To avoid pests, consider potting mix for indoor plants.</p>
               <Button size="lg" variant="secondary" href= "https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/">Browse</Button>
              </Col>
              <Col md="6">
                <h3>outdoors</h3>
                <p className="lead" >Find plants that thrive in your climate by determining your <a href="https://planthardiness.ars.usda.gov/PHZMWeb/">USDA Hardiness Zone</a>.</p>
                <Input type="text" name="zip" id="zipCode" value={zip} placeholder="ZIP code"> </Input>
                <Button onClick={handleClick} value={zip} color="secondary" size="lg" ><SearchIcon /></Button>
              </Col>
            </Row>            


          </Container>

          <h2>sunlight</h2>
          <p className="lead">How much sun exposure the plants will recieve?</p>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary"><WbSunnyIcon /></Button>
            <Button variant="secondary"><WbCloudyIcon /></Button>
            <Button variant="secondary"><CloudQueueIcon /></Button>
          </ButtonGroup>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
          {/* <ToggleButtonGroupControlled /> */}
          {/* <SearchUSDA zip={zip} /> */}
        </Container>

        <Footer />
      </div>
    );
  };
};
export default About;
