import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
// import { useAuth } from '../utils/context/authContext';
import { createItem, updateItem } from '../Api/ItemCalls';

function ItemForm() {
  const router = useRouter();
  //   const { user } = useAuth();
  const [formData, setFormData] = useState({ });

  useEffect(() => {
    if (router?.query.itemObj) {
      const obj = JSON.parse(router.query.itemObj);
      setFormData((prev) => ({
        ...prev,
        name: obj.name,
        price: obj.price,
      }));
    }
  }, [router.query.itemObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (router.query.itemObj) {
      const objItem = JSON.parse(router.query.itemObj);
      updateItem(objItem.id, formData)
        .then(() => router.push('/OrderPage'));
    } else {
      const payload = {
        ...formData,
      };
      const orderId = JSON.parse(router.query.Order);
      createItem(orderId.id, payload);
      router.push({
        pathname: '/ItemPage',
        query: {
          orderObj: JSON.stringify(orderId),
        },
      });
    //   router.push('/OrderPage');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <br />
        <h1 id="welcome-title"> Add/Edit an Item </h1>
        <br />
        <Form.Label>Item Name</Form.Label>
        <Form.Control as="textarea" name="Name" required placeholder=" Name" value={formData.name} onChange={(e) => setFormData(({ ...formData, name: e.target.value }))} />
        <Form.Label>Price</Form.Label>
        <Form.Control as="textarea" name="Price" required placeholder="Price" value={formData.price} onChange={(e) => setFormData(({ ...formData, price: e.target.value }))} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add/Edit Item
      </Button>
    </Form>
  );
}

export default ItemForm;
