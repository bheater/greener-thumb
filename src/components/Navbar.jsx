import React, { useState } from 'react';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
// import { BrowserRouter, Route, Link } from "react-router-dom";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const ExampleNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">greener thumb</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/About">about</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Inspiration">inspiration</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Articles">articles</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://protected-citadel-06350.herokuapp.com/">newsletter</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
            <FilterVintageIcon />
            </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ExampleNavbar;
