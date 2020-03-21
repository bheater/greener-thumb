import React from "react";
import Footer from "./Footer";
import ExampleNavbar from "./Navbar";
import { Jumbotron, Container, Row, Col, Media, Table } from 'reactstrap';
import sun from "../img/001-sun.png";
import partSun from "../img/003-cloudy.png";
import cloudy from "../img/002-cloud.png";
import shade from "../img/007-cloudy-1.png";

const jumbotronStyle = {
  backgroundColor: '#ccc'
}
const caption = {
  color: 'grey',
  
}
class Design extends React.Component {
  render() {

    return (
      <div >
        <ExampleNavbar />
        <Jumbotron fluid style={jumbotronStyle}>
          <Container fluid >
            <p className="lead"> Welcome to the </p>
            <h1 className="display-3" ><i>greener thumb</i>.</h1>
            <p className="lead">Learn to cultivate your garden retreat.</p>
          </Container>
        </Jumbotron>
        <h1>Garden Design</h1>
        <p className="lead" >How you want to feel in your garden oasis? Why do you enjoy nature? </p>
        <h2>Style</h2>
        <p>Check back for more garden design ideas for your indoor and outdoor retreats.</p>

        <Container fluid>
          <Row xs="1" sm="2" md="4">
            <Col>
            <Media left href="#">
                <img alt="minimal-img" className="style-img" src ="https://images.unsplash.com/photo-1521503862198-2ae9a997bbc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=30" />
              </Media>
              <Media body>
                <Media heading> Minimalism </Media>
                  Monochrome and minimalism keep focus on the plants, promoting simplistic tranquility and peace.
              </Media>
            </Col>
            <Col>
             <Media left href="#">
              <img alt="tropical-img" className="style-img" src ="https://images.unsplash.com/photo-1514125669375-59ee3985d08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              </Media>
                <Media body>
                <Media heading>Tropical Bohemian</Media>
                Bohemian aestheics pair well with tropical palms and plants to create a laid-back, relaxed, and care-free vibe.
              </Media>
            </Col>
            <Col>
              <Media left href="#">
              <img alt="cottage-img " className="style-img" src="https://images.unsplash.com/photo-1503045666024-95470ad39b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              </Media>
                <Media body>
                <Media heading>Quaint Cottage</Media>
                    Simple color palletes with variations of texture and pattern embue a cozy, comfortable ambiance of a traditional cottage-feel.
              </Media>
            </Col>
            <Col>
              <Media left href="#">
                <img alt="european-img" className="style-img" src="https://images.unsplash.com/photo-1567373371969-327ef4888391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
              </Media>
                <Media body>
                  <Media heading>Euro-Chic</Media>
                    Incorporate classical greek and roman architecture using columns and urns to establish a formal, timeless, and classic European elegance.
                </Media>
            </Col>
          </Row>

          <hr />

          <h1>Environment</h1>
          <p className="lead">The health of your plants depends on their environment. </p>
            <Row>
              <Col xs="12">
                <h2>Location</h2>
                <p className="lead">Where will your plants be located? </p>
              </Col>

              <Col xs="6">
                <img alt="indoor-img" className="style-img" src="https://images.unsplash.com/photo-1467384520991-15001a740e87?ixlib=rb-1.2.1&dpr=2&auto=format&fit=crop&w=600&q=60" />

                <h3>Indoors</h3>
                <p>For instance, plants located indoors or on a deck will need containers. Plant stands and ladders maximize plant growth in small spaces.</p>
              </Col>
              <Col xs="6">
                <img alt="outdoor-img" className="style-img" src="https://images.unsplash.com/photo-1521446652717-278e3f3f7353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <h3>Outdoors</h3>
                <p>The space available will influence the size and type of plants that will grow best. If planting in the hard, note the number of hours of direct or indirect sunlight exposure.</p>

              </Col>
            </Row>

            <hr />

            <h2>Lighting</h2>
            <Row>
    
              <Col xs="8" sm="6" lg="8" xl="9">
                <p className="lead">How many hours direct sunlight will the plants recieve? </p>
                <h3>Sun Exposure</h3>
                <p>
                  Whether plants are are indoors or outdoors, you will need to assess how much sunlight your garden-to-be will recieve. 
                  Depending on the location, the direction of sunlight can be key find the right plants. For instance, full sun plants facing South will recieve ample direct sunight throughout the day.
                  While, shade plants facing North thrive recieving indirect sunlight.
                </p>
                <Table>
                  <thead>
                    <tr>
                      <th>Plant Type</th>
                      <th>Hours</th>
                      <th>Exposure</th>
                      <th>Direction</th>
                      <th>Time of Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={sun} alt="sun-img" />Full sun</td>
                      <td>6+</td>
                      <td>Direct</td>
                      <td>South</td>
                      <td>All-day</td>
                    </tr>
                    <tr>
                      <td><img src={partSun}  alt="part-sun-img" />Part sun</td>
                      <td>3-6</td>
                      <td>Direct</td>
                      <td>West</td>
                      <td>Noon - Afternoon</td>
                    </tr>
                    <tr>
                      <td><img src={cloudy}  alt="part-shade-img" />Part shade</td>
                      <td>3-6</td>
                      <td>Indirect</td>
                      <td>East</td>
                      <td>Morning</td>
                    </tr>
                    <tr>
                      <td><img src={shade} alt="shade-img"  />Full shade</td>
                      <td>1-3</td>
                      <td>Indirect</td>
                      <td>North</td>
                      <td>All-day</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col xs="6" sm="6" lg="4" xl="3">
                <img alt="light-img" className="style-img"  src="https://images.unsplash.com/photo-1577555695198-590127bcee8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />              
              </Col>
            </Row>

            <hr />
            <h3>Watering</h3>
            <p className="lead">How regularly you will water plants?</p>                
            <p>Location also affects access to rainfall. If your plants require watering, plan to water them when convenient for you. 
            Depending on the types of plants you choose and climate, you may need to change the time of day you water plants during hot summer months.
            </p>
            <Row>
            
              <Col sm="4" >
                <h4>Sparingly</h4>

                <img alt="cacti-img"  className="style-img" src="https://images.unsplash.com/photo-1523758115390-ebac0d7bd49c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80" title="Photo by S O C I A L . C U T on Unsplash"/>
                <div>
                <a className="img-tag"  href="https://unsplash.com/@socialcut?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from S O C I A L . C U T">
                <span className="span-style">
                  <svg className="svg-style" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                  </svg>
                </span>
                <span className="span-style">S O C I A L . C U T</span>
                </a>
                </div>
                <p>
                  Succulents, palms, and cacti are great plants for beginners. These drought-tolerant plants only need to be watered sparingly.
                </p>
              </Col>

              <Col sm="4">
                <h4>Moderately</h4>
                <img alt="hydrangea-img" className="style-img" src="https://images.unsplash.com/photo-1549100789-756142409c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" />
                <p>Hydrangeas, Astilble upright perenials, and Bonzai trees require more regular watering. Water after the soil has dried.</p>
                <p style={caption}>Photo by <a className="img-tag"  href="https://unsplash.com/@josefin?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from S O C I A L . C U T">
                  <span className="span-style">
                    <svg className="svg-style" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
                      <title>unsplash-logo</title>
                      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                  </span>
                  <span className="span-style">Josefin</span>
                  </a> on Unplash.
                </p>
              </Col>
              <Col sm="4">
                <h4>Frequently</h4>
                <img alt="lily-img" className="style-img" src="https://images.unsplash.com/photo-1562435582-2337b0267ab2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" />
                <div>
                <a className="img-tag"  href="https://unsplash.com/@joshadamsford?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Josh Adams-Ford">
                <span className="span-style">
                  <svg className="svg-style" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32">
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                  </svg>
                </span>
                <span className="span-style">Josh Adams-Ford</span>
                </a>
                </div>
                <p>Peace lillies thrive with regular, thorough watering. Place theses water-loving plants where they benefit from runoff during rain showers. </p>
              </Col>
            </Row>
        </Container>

        <Footer />
      </div>
    );
  }

}

export default Design;
