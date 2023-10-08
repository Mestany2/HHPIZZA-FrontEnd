import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { createOrder } from '../Api/OrderCalls';
import { useAuth } from '../utils/context/authContext';

function CreateOrderForm() {
  const router = useRouter();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    Status: 'open',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData, UserId: user[0].id, Status: 'open',
    };
    console.warn('my payload', payload);
    createOrder(payload);
    router.push('/OrderPage');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Order Name</Form.Label>
        <Form.Control as="textarea" name="Name" required placeholder=" Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Phone</Form.Label>
        <Form.Control as="textarea" name="Phone" required placeholder="Phone" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Email</Form.Label>
        <Form.Control as="textarea" name="Email" required placeholder="Email" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        <Form.Label>Order Type</Form.Label>
        <Form.Control as="textarea" name="OrderType" required placeholder="OrderType" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// CreateOrderForm.propTypes = {
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

export default CreateOrderForm;
