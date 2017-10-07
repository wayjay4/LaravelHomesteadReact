import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component {
  render(){
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/" exact>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>

              <LinkContainer to="/archives">
                <NavItem eventKey={2}>Archives</NavItem>
              </LinkContainer>

              <LinkContainer to="/settings">
                <NavItem eventKey={3}>Settings</NavItem>
              </LinkContainer>

              <LinkContainer to="/submit">
                <NavItem eventKey={4}>Submit</NavItem>
              </LinkContainer>

              <NavDropdown eventKey={5} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={5.1}>Action</MenuItem>
                <MenuItem eventKey={5.2}>Another action</MenuItem>
                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={5.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
