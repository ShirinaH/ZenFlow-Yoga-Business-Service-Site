import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import ClassCard from '../components/ClassCard';
import StepIndicator from '../components/StepIndicator';
import { classes } from '../data/classes';

const steps = ['Choose Class', 'Pick Date & Time', 'Confirm'];

const upcomingDates = [
  { label: 'Mon, Jun 9', value: '2026-06-09' },
  { label: 'Wed, Jun 11', value: '2026-06-11' },
  { label: 'Sat, Jun 14', value: '2026-06-14' },
  { label: 'Mon, Jun 16', value: '2026-06-16' },
];

const timeSlots = ['6:30 PM', '12:00 PM', '10:00 AM', '7:00 AM'];

export default function ReservePage() {
  const [step, setStep] = useState(1);
  const [selectedClass, setSelectedClass] = useState('beginner-hatha');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const yogaClass = classes.find((c) => c.id === selectedClass);

  const canProceed =
    (step === 1 && selectedClass) ||
    (step === 2 && selectedDate && selectedTime) ||
    step === 3;

  const handleConfirm = () => {
    setShowModal(true);
  };

  const reset = () => {
    setStep(1);
    setSelectedClass('beginner-hatha');
    setSelectedDate('');
    setSelectedTime('');
    setShowModal(false);
  };

  return (
    <section className="section-pad">
      <Container>
        <div className="section-header text-center mb-4">
          <p className="section-eyebrow">Book Your Mat</p>
          <h2>Reserve a Class</h2>
        </div>

        <StepIndicator steps={steps} current={step} />

        <div className="reserve-panel mx-auto">
          {step === 1 && (
            <Row className="g-4 justify-content-center">
              {classes.map((c) => (
                <Col md={6} lg={4} key={c.id}>
                  <ClassCard
                    yogaClass={c}
                    selected={selectedClass === c.id}
                    onSelect={setSelectedClass}
                    showSelect
                  />
                </Col>
              ))}
            </Row>
          )}

          {step === 2 && (
            <div>
              <h4 className="mb-3">Select a date</h4>
              <div className="date-grid mb-4">
                {upcomingDates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    className={`date-slot ${selectedDate === d.value ? 'active' : ''}`}
                    onClick={() => setSelectedDate(d.value)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              <h4 className="mb-3">Select a time</h4>
              <div className="time-grid">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`time-slot ${selectedTime === t ? 'active' : ''}`}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && yogaClass && (
            <div className="confirm-card text-center">
              <div className="confirm-icon">✓</div>
              <h3>Ready to Reserve</h3>
              <p className="confirm-detail">
                <strong>{yogaClass.name}</strong>
                <br />
                {upcomingDates.find((d) => d.value === selectedDate)?.label} at {selectedTime}
                <br />
                with {yogaClass.instructor} · ${yogaClass.price}
              </p>
              <Button variant="primary" size="lg" onClick={handleConfirm}>
                Confirm Reservation
              </Button>
            </div>
          )}

          <div className="d-flex justify-content-between mt-4 pt-3 border-top">
            <Button
              variant="outline-secondary"
              disabled={step === 1}
              onClick={() => setStep((s) => s - 1)}
            >
              Back
            </Button>
            {step < 3 ? (
              <Button
                variant="primary"
                disabled={!canProceed}
                onClick={() => setStep((s) => s + 1)}
              >
                Continue
              </Button>
            ) : null}
          </div>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Spot Reserved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your mat is reserved for <strong>{yogaClass?.name}</strong> on{' '}
          {upcomingDates.find((d) => d.value === selectedDate)?.label} at {selectedTime}.
          A confirmation would be sent to your email in a production app.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={reset}>
            Book Another Class
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
