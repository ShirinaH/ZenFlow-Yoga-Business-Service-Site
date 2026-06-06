import { Container, Row, Col } from 'react-bootstrap';
import { studioInfo } from '../data/studioInfo';

export default function Footer() {
  return (
    <footer className="site-footer py-5 mt-auto">
      <Container>
        <Row className="g-4">
          <Col md={4}>
            <h5 className="footer-brand">{studioInfo.name}</h5>
            <p className="footer-text">{studioInfo.tagline}</p>
          </Col>
          <Col md={4}>
            <h6 className="footer-heading">Contact</h6>
            <p className="footer-text mb-1">{studioInfo.address}</p>
            <p className="footer-text mb-1">{studioInfo.phone}</p>
            <p className="footer-text mb-0">{studioInfo.email}</p>
          </Col>
          <Col md={4}>
            <h6 className="footer-heading">Hours</h6>
            {studioInfo.hours.map((row) => (
              <p key={row.day} className="footer-text mb-1">
                <strong>{row.day}:</strong> {row.time}
              </p>
            ))}
          </Col>
        </Row>
        <hr className="footer-divider my-4" />
        <p className="footer-credit text-center mb-0">
          Designed by {studioInfo.designer} · SEG3125 Assignment 2
        </p>
      </Container>
    </footer>
  );
}
