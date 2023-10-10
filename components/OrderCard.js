import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteOrder } from '../Api/OrderCalls';

export default function OrderCard({ orderObj, onUpdate }) {
  const router = useRouter();
  const deleteTheOrder = () => {
    if (window.confirm('Delete This Order?')) {
      deleteOrder(orderObj.id).then(() => onUpdate());
    }
  };

  const updateForm = () => {
    router.push({
      pathname: '/CreateOrderForm',
      query: {
        orderObj: JSON.stringify(orderObj),
      },
    });
  };

  const viewItems = () => {
    router.push({
      pathname: '/ItemPage',
      query: {
        orderObj: JSON.stringify(orderObj),
      },
    });
  };
  if (orderObj.status === 'open') {
    return (
      <div id="order-card" className="card">
        <div className="card-body">
          <h5 className="card-title"><b>Order#:</b> {orderObj.id}</h5>
          <h5 className="card-title"><b>Name:</b> {orderObj.name}</h5>
          <p className="card-text bold"><b>Email:</b> {orderObj.email}</p>
          <p className="card-text bold"><b>Phone Number:</b> {orderObj.phone}</p>
          <p className="card-text bold"><b>Order Status:</b> {orderObj.status}</p>
          <p className="card-text bold"><b>Order Type:</b> {orderObj.orderType}</p>
          <hr />
          <button type="button" id="view-details-btn" className=" btn btn-success" onClick={viewItems}>View</button>
          <button type="button" id="edit-order-btn" className=" btn btn-info" onClick={updateForm}>Edit</button>
          <button type="button" id="delete-order-btn" className="btn btn-danger" onClick={deleteTheOrder}>Delete</button>
        </div>
      </div>
    );
  }
  return (
    <div id="closed-card" className="card">
      <div className="card-body">
        <h5 className="card-title"><b>Order#:</b> {orderObj.id}</h5>
        <h5 className="card-title"><b>Name:</b> {orderObj.name}</h5>
        <p className="card-text bold"><b>Email:</b> {orderObj.email}</p>
        <p className="card-text bold"><b>Phone Number:</b> {orderObj.phone}</p>
        <p className="card-text bold"><b>Order Status:</b> {orderObj.status}</p>
        <p className="card-text bold"><b>Order Type:</b> {orderObj.orderType}</p>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    status: PropTypes.string,
    orderType: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
