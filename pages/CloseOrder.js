import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { updateOrder } from '../Api/OrderCalls';

function CloseOrder() {
  const router = useRouter();
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderObj = JSON.parse(router.query.Order);
    const payload = {
      ...formData, status: 'Closed', name: orderObj.name, email: orderObj.email, phone: orderObj.phone, orderType: orderObj.orderType, userId: orderObj.userId, reviewId: orderObj.reviewId,
    };
    updateOrder(orderObj.id, payload);
    router.push('/OrderPage');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <br />
        <h1 id="welcome-title"> Close An Order </h1>
        <br />
        <FloatingLabel controlId="floatingInput1" label="Payment Type" className="mb-3" style={{ color: 'red' }}>
          <Form.Select
            type="text"
            placeholder=""
            name="paymentId"
            onChange={({ target }) => {
              const selectedValue = target.value; // Convert to boolean
              setFormData((prev) => ({ ...prev, [target.name]: selectedValue }));
            }}
            required
          >
            <option>Payment Type</option>
            <option value={1} style={{ color: 'black' }}>Credit Card</option>
            <option value={2} style={{ color: 'black' }}>Cash</option>
            <option value={3} style={{ color: 'black' }}>Mobile Pay</option>
          </Form.Select>
        </FloatingLabel>
        <Form.Label>Tip Amount</Form.Label>
        <Form.Control as="textarea" name="Tip" required placeholder="Tip Amount" onChange={(e) => setFormData(({ ...formData, tip: e.target.value }))} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Close Order
      </Button>
    </Form>
  );
}

export default CloseOrder;
