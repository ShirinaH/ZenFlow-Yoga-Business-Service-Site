import { useState } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import ClassCard from '../components/ClassCard';
import { classes } from '../data/classes';

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

export default function ClassesPage() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    filter === 'All'
      ? classes
      : classes.filter((c) => c.difficulty === filter);

  return (
    <section className="section-pad">
      <Container>
        <div className="section-header mb-4">
          <p className="section-eyebrow">Our Offerings</p>
          <h2>Class Catalogue</h2>
          <p className="text-muted">
            Filter by difficulty and click a card to highlight your choice.
          </p>
        </div>

        <ButtonGroup className="filter-group mb-4 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'outline-secondary'}
              onClick={() => setFilter(f)}
              className="filter-btn"
            >
              {f}
            </Button>
          ))}
        </ButtonGroup>

        {selected && (
          <div className="selection-banner mb-4">
            Selected: <strong>{classes.find((c) => c.id === selected)?.name}</strong>
          </div>
        )}

        <Row className="g-4">
          {filtered.map((yogaClass) => (
            <Col md={6} lg={3} key={yogaClass.id}>
              <ClassCard
                yogaClass={yogaClass}
                selected={selected === yogaClass.id}
                onSelect={setSelected}
                showSelect
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
