import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ClassCard from '../components/ClassCard';
import { classes } from '../data/classes';
import { studioInfo } from '../data/studioInfo';

export default function HomePage() {
  const featured = classes.slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={7}>
              <p className="hero-eyebrow">Ottawa · Wellness · Community</p>
              <h1 className="hero-title">{studioInfo.name}</h1>
              <p className="hero-subtitle">{studioInfo.tagline}</p>
              <p className="hero-desc">
                Drop in or reserve your mat online. Beginner-friendly classes, experienced
                instructors, and a calm space to reconnect with yourself.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button as={Link} to="/reserve" variant="primary" size="lg" className="cta-btn">
                  Reserve a Class
                </Button>
                <Button as={Link} to="/schedule" variant="outline-light" size="lg" className="cta-btn-outline">
                  View Schedule
                </Button>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero-card">
                <h3>Drop-in Welcome</h3>
                <p>{studioInfo.dropInPolicy}</p>
                <div className="hero-stat">
                  <span className="stat-num">4+</span>
                  <span className="stat-label">class styles daily</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="section-header text-center mb-5">
            <p className="section-eyebrow">Featured Classes</p>
            <h2>Start Your Practice</h2>
          </div>
          <Row className="g-4">
            {featured.map((yogaClass) => (
              <Col md={4} key={yogaClass.id}>
                <ClassCard yogaClass={yogaClass} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button as={Link} to="/classes" variant="outline-primary">
              Browse All Classes
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
