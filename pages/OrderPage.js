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
      <div>
        <h3 id="welcome-title"> Open Orders</h3>
      </div>
      <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
        {orders.map((obj) => (
          obj.status === 'open' ? (
            <>
              <OrderCard orderObj={obj} onUpdate={updateOrders} />
            </>
          ) : (
            <></>
          )
        ))}
      </div>
      <div>
        <h3 id="welcome-title"> Closed Orders</h3>
      </div>
      <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
        {orders.map((obj) => (
          obj.status === 'Closed' ? (
            <>
              <OrderCard orderObj={obj} onUpdate={updateOrders} />
            </>
          ) : (
            <></>
          )
        ))}
      </div>
    </>
  );
}
