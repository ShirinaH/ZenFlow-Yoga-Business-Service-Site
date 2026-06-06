import { NavLink } from 'react-router-dom';
import { Container, Navbar as BSNavbar, Nav } from 'react-bootstrap';
import { studioInfo } from '../data/studioInfo';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/classes', label: 'Classes' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/reserve', label: 'Reserve' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <BSNavbar expand="lg" className="site-navbar py-3" sticky="top">
      <Container>
        <BSNavbar.Brand as={NavLink} to="/" className="brand-link">
          <span className="brand-icon">☯</span> {studioInfo.name}
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="main-nav" />
        <BSNavbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-lg-2">
            {navItems.map((item) => (
              <Nav.Link
                key={item.to}
                as={NavLink}
                to={item.to}
                end={item.end}
                className="nav-pill"
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}
