import { Badge, Card, Button } from 'react-bootstrap';

export default function ClassCard({ yogaClass, selected, onSelect, showSelect = false }) {
  return (
    <Card
      className={`class-card h-100 ${selected ? 'class-card--selected' : ''}`}
      onClick={showSelect ? () => onSelect?.(yogaClass.id) : undefined}
      role={showSelect ? 'button' : undefined}
      tabIndex={showSelect ? 0 : undefined}
      onKeyDown={
        showSelect
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onSelect?.(yogaClass.id);
            }
          : undefined
      }
    >
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Badge bg="secondary" className="difficulty-badge">
            {yogaClass.difficulty}
          </Badge>
          <span className="class-price">${yogaClass.price}</span>
        </div>
        <Card.Title className="class-title">{yogaClass.name}</Card.Title>
        <Card.Text className="class-meta">
          {yogaClass.style} · {yogaClass.duration} · {yogaClass.instructor}
        </Card.Text>
        <Card.Text className="class-desc flex-grow-1">{yogaClass.description}</Card.Text>
        {showSelect && (
          <Button
            variant={selected ? 'primary' : 'outline-primary'}
            className="mt-2 select-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(yogaClass.id);
            }}
          >
            {selected ? 'Selected' : 'Select Class'}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
