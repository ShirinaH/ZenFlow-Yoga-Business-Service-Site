import { Badge } from 'react-bootstrap';
import { weekDays } from '../data/classes';

export default function WeeklyGrid({ classes, activeDay, onDayChange }) {
  const dayClasses = (day) =>
    classes.flatMap((c) =>
      c.schedule
        .filter((s) => s.day === day)
        .map((s) => ({ ...c, time: s.time }))
    );

  return (
    <div>
      <div className="day-tabs d-flex flex-wrap gap-2 mb-4">
        {weekDays.map((day) => (
          <button
            key={day}
            type="button"
            className={`day-tab ${activeDay === day ? 'active' : ''}`}
            onClick={() => onDayChange(day)}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>
      <div className="schedule-list">
        {dayClasses(activeDay).length === 0 ? (
          <p className="text-muted">No classes scheduled for {activeDay}.</p>
        ) : (
          dayClasses(activeDay).map((item) => (
            <div key={`${item.id}-${item.time}`} className="schedule-row">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-info">
                <strong>{item.name}</strong>
                <span className="d-block text-muted small">
                  {item.instructor} · {item.duration}
                </span>
              </div>
              <Badge bg="secondary">{item.difficulty}</Badge>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
