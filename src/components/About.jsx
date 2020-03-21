import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import { Container, Jumbotron, Col, Row} from 'reactstrap';
// import ImageBackground from 'react-native';
// import SearchIcon from '@material-ui/icons/Search';
// // import Axios from 'axios';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
// import CloudQueueIcon from '@material-ui/icons/CloudQueue';
// import WbCloudyIcon from '@material-ui/icons/WbCloudy';

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
// function handleClick(){
//   console.log("Searach button clicked");
// }

// var zip = "";
const imgUrl = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1800&q=80"
const backgroundImgStyle = {
  backgroundImage: 'url('+imgUrl+')',
  color: 'white',
}

class About extends React.Component{

  render(){
    return (
      <div >
        <ExampleNavbar />
        <Jumbotron fluid style={backgroundImgStyle}>
          <Container fluid>
            <p className="lead"> Welcome to the <strong>Greener Thumb</strong>.</p>
            <h1 className="display-3" ><i>Refined</i> gardening </h1>
            <p className="lead"> for beginners.</p>
          </Container>
        </Jumbotron>
        {/* className="themed-container"  */}
        <Container  >
        <h3 className="display-4">Purpose</h3>
              <p className="lead">Consolidate tools, tips, and resources to help aspiring and professional gardeners.</p>

          <Row>


            <Col>
              <h3 className="display-4">Goals</h3>
              <p className="lead">Find plants that thrive in your climate. </p>
              <p className="lead">Design and cultivate your garden retreat.</p>
              <p className="lead">Nurture and maintain the garden of your dreams.</p>
            </Col>

            <Col>
              <h3 className="display-4">Design </h3>
              <p className="lead"><i>Ambiance:</i> elegant, simple, relaxed, playful, adventurous... </p>
              <p className="lead"><i>Plants:</i>  Flowers, herbs, vegetables, succulents...</p>
              <p className="lead"><i>Style:</i>  Minimal, modern, elegant, traditional, ... </p>
            </Col>

            <Col>
              <h3 className="display-4">Learn</h3>
              <h3 >USDA Hardiness Zone</h3>
              <p className="lead">Find plants that thrive in your climate. </p>

              <h3 >Plant Care</h3>
              <p className="lead">The health of your plants depends on their environment. Find plants that fit your needs and exposure to sunlight.</p>
            </Col>

          </Row>
        </Container>

        <Footer />
      </div>
    );
  };
};
export default About;

// {/* <h2>Location</h2>
          
// <p>Where will your plants grow?</p>
// <Container>

//   <Row>
//     <Col md="6">
//      <h3>Indoors</h3>
//      <p className="lead" >Tropical plants tend do well indoors, due to minimal temperature fluctuations.</p>
//      <p>To avoid pests, consider potting mix for indoor plants.</p>
//      <Button size="lg" variant="secondary" href= "https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/">Browse</Button>
//     </Col>
//     <Col md="6">
//       <h3>Outdoors</h3>
//       <p className="lead" >Find plants that thrive in your climate by determining your <a href="https://planthardiness.ars.usda.gov/PHZMWeb/">USDA Hardiness Zone</a>.</p>
//       <Input type="text" name="zip" id="zipCode" value={zip} placeholder="ZIP code"> </Input>
//       <Button onClick={handleClick} value={zip} color="secondary" size="lg" ><SearchIcon /></Button>
//     </Col>
//   </Row>            


// </Container>

// <h2>sunlight</h2>
// <p className="lead">How much sun exposure the plants will recieve?</p>
// <ButtonGroup aria-label="Basic example">
//   <Button variant="secondary"><WbSunnyIcon /></Button>
//   <Button variant="secondary"><WbCloudyIcon /></Button>
//   <Button variant="secondary"><CloudQueueIcon /></Button>
// </ButtonGroup>

// <SearchUSDA zip={zip} /> */}