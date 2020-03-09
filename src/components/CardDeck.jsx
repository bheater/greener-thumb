import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody, CardFooter
} from 'reactstrap';

const ExampleCardDeck = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1474444417714-f5d07c4d6a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Potting</CardTitle>
          <CardText>Design a beautiful garden using containers and choose the
            right container for both your plants and your style.
          </CardText>
          <Button>Read More</Button>
        </CardBody>
        <CardFooter className="text-muted">Photo by Annie Sprat on Unsplash</CardFooter>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Gardening tools for planting" />
        <CardBody>
          <CardTitle>Planting</CardTitle>
          <CardText>Learn tips to easily nestle your plants in thier carefully-curated, new
            homes. 
          </CardText>
          <Button>Read More</Button>
        </CardBody>
        <CardFooter className="text-muted">Photo by Neslihan Gunaydin on Unsplash</CardFooter>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1515864119557-22a6aa3b546b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Card image cap" />
        <CardBody>
          <CardTitle>Propogating</CardTitle>
          <CardText>Trim back and tidy up your garden by propogation. This guide
            explains how to take cuttings from your plant and propogate by water and soil.
          </CardText>
          <Button>Read More</Button>
        </CardBody>
        <CardFooter className="text-muted">Photo by Mike Marquez on Unsplash</CardFooter>
      </Card>
    </CardDeck>
  );
};

export default ExampleCardDeck;
