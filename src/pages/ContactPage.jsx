import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { studioInfo } from '../data/studioInfo';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      next.email = 'Valid email is required.';
    if (!form.message.trim()) next.message = 'Message is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section className="section-pad">
      <Container>
        <Row className="g-5">
          <Col lg={5}>
            <p className="section-eyebrow">Get in Touch</p>
            <h2>Contact Us</h2>
            <p className="text-muted mb-4">
              Questions about classes, drop-ins, or private sessions? Send us a message.
            </p>
            <div className="contact-block">
              <h5>Studio</h5>
              <p>{studioInfo.address}</p>
            </div>
            <div className="contact-block">
              <h5>Phone</h5>
              <p>{studioInfo.phone}</p>
            </div>
            <div className="contact-block">
              <h5>Email</h5>
              <p>{studioInfo.email}</p>
            </div>
          </Col>
          <Col lg={7}>
            <div className="panel-card">
              {submitted ? (
                <Alert variant="success">
                  Thank you, {form.name}! We received your message and will reply within 24 hours.
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      isInvalid={!!errors.message}
                    />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
