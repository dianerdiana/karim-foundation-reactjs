import React from 'react'

// ** RB & Thirdparty component
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Menu } from 'react-feather'

// ** Images
import Logo from 'assets/icons/logo/logo.svg'

const HomePage = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            src={Logo}
            alt='karim-foundation'
            className='img-fluid bg-white rounded-3 p-1'
            width={42}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          className='shadow-none'
        >
          <Menu />
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='primary rounded-0'>Hubungi Kami</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomePage
