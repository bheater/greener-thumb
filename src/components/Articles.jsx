import React from "react";
import ExampleNavbar from "./Navbar";
import {  Container, Row, Col, Card, Jumbotron, Button, CardImg, CardTitle, CardText, CardBody, CardFooter
} from 'reactstrap';
import Footer from "./Footer";


class Articles extends React.Component{
  render(){
    return (
      <div>
        <ExampleNavbar />
        <Jumbotron fluid>
          <Container fluid>
          <p className="lead">Design your </p>
            <h1 className="display-3"><i>dream</i> garden.</h1>
            <p className="lead" >Cultivate your oasis by learning the basics of plant care.</p>
 
          </Container>
        </Jumbotron>
        <h1>articles</h1>

        <ArticleCardColumns />
        <Footer />
      </div>
    );
  };
};
export default Articles;



const ArticleCardColumns = (props) => {
  return (
  <Container fluid={true}>
        <p>The following articles will help you get started with the basics of gardening.
        Caring for plants is incredibly rewarding as you help them thrive for seasons to come.
        </p>
    <Row md="12" lg="12">
      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1474444417714-f5d07c4d6a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Potting</CardTitle>
            <CardText>Design a beautiful garden with containers and choose the
              right pot for both your plant and style.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Annie Sprat on Unsplash</CardFooter>
        </Card>
      </Col>
      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Gardening tools for planting" />
          <CardBody>
            <CardTitle>Planting</CardTitle>
            <CardText>Learn tips to easily nestle your plants in thier carefully-curated, new
              homes. Topics in this article include soil type and placement.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Neslihan Gunaydin on Unsplash</CardFooter>
        </Card>
      </Col>

      <Col sm="6" md="4" lg="3"  xl="2">
        <Card className="card">
          <CardImg className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1515864119557-22a6aa3b546b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Card image cap" />
          <CardBody>
            <CardTitle>Propogating</CardTitle>
            <CardText>Trim back and tidy up your garden. This guide
              explains how to take cuttings from your plant and propogate by water and soil.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Mike Marquez on Unsplash</CardFooter>
        </Card>
      </Col>

      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80" alt="Succulents image caption" />
          <CardBody>
            <CardTitle>Succuluents</CardTitle>
            <CardText>These water-savy plants are excellent for beginners.
              Learn the minimal effort required to care for self-reliant succulents.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Annie Spratt on Unsplash</CardFooter>
        </Card>
      </Col>
      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" alt="Tropical palm tree leaves image caption" />
          <CardBody>
            <CardTitle>Tropical Paradise</CardTitle>
            <CardText>Imbue your home with the relaxed and calming effect of Palms.
              Their large leaves effortlessly conceal any unsightly eye-sores.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by vickholius nugroho on Unsplash</CardFooter>
        </Card>
      </Col>

      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg className="card-img-top"  top width="100%" src="https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Houseplants image cap" />
          <CardBody>
            <CardTitle>Indoor plants</CardTitle>
            <CardText>Learn tips about how to care for your indoor plants.</CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Brina Blum on Unsplash</CardFooter>
        </Card>
      </Col>

      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card" body inverse style={{ backgroundColor: '#abc2b1', borderColor: '#abc2b1' ,backgroundImage: "https://www.transparenttextures.com/patterns/inflicted.png"}}>
          <CardBody>
            <CardTitle>Garden Design</CardTitle>
            <CardText>Transform any patio or deck into a lush, private retreat.
              Determine the degree of exposure to sunlight and choose plants to meet those light requirements.
              Decide how you want the space to make you feel (i.e. relaxed, calm, energetic, etc.).
              Obtain containers that fit your style and drill holes for drainage.
            </CardText>
            <Button>Read More</Button>
          </CardBody>
        </Card>
      </Col>

      <Col sm="6" md="4" lg="3" xl="2">
        <Card className="card">
          <CardImg  className="card-img-top" top width="100%" src="https://images.unsplash.com/photo-1526381805515-3fec2d69e7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=608&q=80" alt="Gardening tools image caption" />
          <CardBody>
            <CardTitle>Tools of the Trade</CardTitle>
            <CardText>Ensure you have the basic neccessities to maintain your garden.</CardText>
            <Button>Read More</Button>
          </CardBody>
          <CardFooter className="text-muted">Photo by Annie Spratt on Unsplash</CardFooter>
        </Card>
      </Col>

    </Row>

    </Container>
  );
};
export {ArticleCardColumns};

