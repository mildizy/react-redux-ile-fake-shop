import React, { useState } from 'react';
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
  NavbarText,
} from 'reactstrap';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">FakeShop</NavbarBrand>
        

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/muhammed-y%C4%B1ld%C4%B1z-891512209/">
                LinkedIn
              </NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText style={{fontWeight:"bold",fontStyle:"oblique",fontSize:"18px"}}>Keyifli Alışverişler...</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
