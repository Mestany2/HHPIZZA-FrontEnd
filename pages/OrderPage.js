import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import OrderCard from '../components/OrderCard';
import { getUserOrders } from '../Api/OrderCalls';

export default function OrderPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const updateOrders = () => {
    getUserOrders(user[0].id)?.then((data) => {
      setOrders(data);
    });
  };

  useEffect(() => {
    getUserOrders(user[0].id)?.then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <>
      <br />
      <h1 id="welcome-title"> My Orders</h1>
      <br />
      <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
        {orders.map((obj) => <OrderCard orderObj={obj} onUpdate={updateOrders} />)}
      </div>
    </>
  );
}
