import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Image src="./hhplogo.jpg" alt="logo" style={{ width: 50, marginTop: 5, marginLeft: 0 }} />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/OrderPage">
              <Nav.Link>View Order</Nav.Link>
            </Link>
            <Link passHref href="/CreateOrderForm">
              <Nav.Link>Create an Order</Nav.Link>
            </Link>
            <Link passHref href="/Revenue">
              <Nav.Link>View Revenue</Nav.Link>
            </Link>

            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
