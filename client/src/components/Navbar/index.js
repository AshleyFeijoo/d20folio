import React from "react";
import { Link,NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
} from "reactstrap";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="NavBar">
        <Navbar color="" light expand="md">
          <NavbarBrand href="/">D20Folio</NavbarBrand>
          <img src="/images/d20-folio-logo-1.png" alt=""style={{ width: "4em" }} />
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="nav-item mr-2 border-right border-dark pr-2">
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>

              <NavItem className="nav-item mr-1 border-right border-dark pr-2 ml-2">
                <NavLink>
                  <Link to="/mychars">My Characters</Link>
                </NavLink>
              </NavItem>

              <NavItem className="nav-item mr-1 ml-2 pr-2">
                <NavLink>
                  <Link to="/new">Add New Character</Link>
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
