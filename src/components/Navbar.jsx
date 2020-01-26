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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
            <NavLink href="/About">About</NavLink>
          </NavItem>
            <NavItem>
              <NavLink href="/Inspiration">Inspiration</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Blog">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://protected-citadel-06350.herokuapp.com/">Newsletter</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Search Plants
                </DropdownItem>
                <DropdownItem>
                  Blog Posts
                </DropdownItem>
                <DropdownItem>
                  Blog Posts
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
