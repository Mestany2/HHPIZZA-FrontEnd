import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { createOrder, updateOrder } from '../Api/OrderCalls';
import { useAuth } from '../utils/context/authContext';

function CreateOrderForm() {
  const router = useRouter();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    Status: 'open',
  });

  useEffect(() => {
    if (router?.query.orderObj) {
      const obj = JSON.parse(router.query.orderObj);
      setFormData((prev) => ({
        ...prev,
        name: obj.name,
        phone: obj.phone,
        email: obj.email,
        orderType: obj.orderType,
      }));
    }
  }, [router.query.orderObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (router.query.orderObj) {
      const objOrder = JSON.parse(router.query.orderObj);
      updateOrder(objOrder.id, formData)
        .then(() => router.push('/OrderPage'));
    } else {
      const payload = {
        ...formData, UserId: user[0].id, Status: 'open',
      };
      console.warn('my payload', payload);
      createOrder(payload);
      router.push('/OrderPage');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <br />
        <h1 id="welcome-title"> Create An Order </h1>
        <br />
        <Form.Label>Order Name</Form.Label>
        <Form.Control as="textarea" name="Name" required placeholder=" Name" value={formData.name} onChange={(e) => setFormData(({ ...formData, name: e.target.value }))} />
        <Form.Label>Phone</Form.Label>
        <Form.Control as="textarea" name="Phone" required placeholder="Phone" value={formData.phone} onChange={(e) => setFormData(({ ...formData, phone: e.target.value }))} />
        <Form.Label>Email</Form.Label>
        <Form.Control as="textarea" name="Email" required placeholder="Email" value={formData.email} onChange={(e) => setFormData(({ ...formData, email: e.target.value }))} />
        <Form.Label>Order Type</Form.Label>
        <Form.Control as="textarea" name="OrderType" required placeholder="OrderType" value={formData.orderType} onChange={(e) => setFormData(({ ...formData, orderType: e.target.value }))} />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

// CreateOrderForm.propTypes = {
//   // obj: PropTypes.shape({
//   //   id: PropTypes.number.isRequired,
//   //   Name: PropTypes.string,
//   //   Phone: PropTypes.string,
//   //   Email: PropTypes.string,
//   //   OrderType: PropTypes.string,
//   }).isRequired,
// };

export default CreateOrderForm;
