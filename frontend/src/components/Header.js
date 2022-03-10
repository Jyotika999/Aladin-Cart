import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand href="#"><i className='fas fa-shopping-cart'></i>Aladin Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i>SignIn</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header