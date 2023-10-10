import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';
import { addReview } from '../Api/ReviewCalls';

export default function ReviewPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ });

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = JSON.parse(router.query.orderObj);
    const payload = {
      ...formData,
    };
    addReview(order.id, payload);
    router.push('/OrderPage');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1 id="welcome-title"> How did we do?</h1>
        <div className="rate">
          <input type="radio" id="star5" name="rate" value="5" onChange={(e) => setFormData(({ ...formData, rating: e.target.value }))} />
          <label htmlFor="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" onChange={(e) => setFormData(({ ...formData, rating: e.target.value }))} />
          <label htmlFor="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" onChange={(e) => setFormData(({ ...formData, rating: e.target.value }))} />
          <label htmlFor="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" onChange={(e) => setFormData(({ ...formData, rating: e.target.value }))} />
          <label htmlFor="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" onChange={(e) => setFormData(({ ...formData, rating: e.target.value }))} />
          <label htmlFor="star1" title="text">1 star</label>
        </div>
        <Form.Label>Item Name</Form.Label>
        <Form.Control as="textarea" name="content" required placeholder="Leave your review here." onChange={(e) => setFormData(({ ...formData, content: e.target.value }))} />
        <br />
        <Button variant="primary" type="submit">
          Submit Review
        </Button>
      </Form>
    </>
  );
}
