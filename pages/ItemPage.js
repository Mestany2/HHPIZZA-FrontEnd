import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrderItems } from '../Api/ItemCalls';
import ItemCard from '../components/ItemCard';

export default function ItemPage() {
  const router = useRouter();
  const [items, setItems] = useState([]);

  const updateItems = () => {
    const orderObj = JSON.parse(router.query.orderObj);
    getOrderItems(orderObj.id)?.then((data) => {
      setItems(data);
    });
  };

  const getOrder = () => {
    const orderObj = JSON.parse(router.query.orderObj);
    router.push({
      pathname: '/ItemForm',
      query: {
        Order: JSON.stringify(orderObj),
      },
    });
  };

  const closeOrder = () => {
    const orderObj = JSON.parse(router.query.orderObj);
    router.push({
      pathname: '/CloseOrder',
      query: {
        Order: JSON.stringify(orderObj),
      },
    });
  };

  useEffect(() => {
    const orderObj = JSON.parse(router.query.orderObj);
    getOrderItems(orderObj?.id)?.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <>
      <br />
      <h1 id="welcome-title"> Order Items</h1>
      <br />
      <div id="text-style" className="items-add-btn">
        <button type="button" className="btn btn-success btn-lg btn-3" id="add-items" onClick={getOrder}>Add item</button>
        <br />
        <br />
        <button type="button" className="btn btn-success btn-lg btn-3" id="go-to-payment" onClick={closeOrder}>Go To Payment</button>
        <br />
        <br />
      </div>
      <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
        {items.map((obj) => <ItemCard itemObj={obj} onUpdate={updateItems} />)}
      </div>
    </>
  );
}
