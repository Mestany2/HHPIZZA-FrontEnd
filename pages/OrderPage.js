import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import OrderCard from '../components/OrderCard';
import { getUserOrders } from '../Api/OrderCalls';

export default function OrderPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders(user[0].id)?.then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <>
      <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
        {orders.map((obj) => <OrderCard orderObj={obj} onUpdate={getUserOrders} />)}
      </div>
    </>
  );
}
