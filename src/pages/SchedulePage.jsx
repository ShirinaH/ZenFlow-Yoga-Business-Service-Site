import { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import WeeklyGrid from '../components/WeeklyGrid';
import { classes } from '../data/classes';
import { studioInfo } from '../data/studioInfo';

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <section className="section-pad">
      <Container>
        <div className="section-header mb-4">
          <p className="section-eyebrow">Plan Your Visit</p>
          <h2>Weekly Schedule</h2>
          <p className="text-muted">
            Browse class times, studio hours, and our drop-in policy — no account needed.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <div className="panel-card">
              <WeeklyGrid
                classes={classes}
                activeDay={activeDay}
                onDayChange={setActiveDay}
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="panel-card mb-4">
              <h4>Studio Hours</h4>
              {studioInfo.hours.map((row) => (
                <p key={row.day} className="mb-2">
                  <strong>{row.day}</strong>
                  <br />
                  {row.time}
                </p>
              ))}
            </div>
            <Accordion className="dropin-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Drop-in Policy</Accordion.Header>
                <Accordion.Body>{studioInfo.dropInPolicy}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Location</Accordion.Header>
                <Accordion.Body>
                  {studioInfo.address}
                  <br />
                  <br />
                  Near Somerset & Elgin. Street parking available.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
