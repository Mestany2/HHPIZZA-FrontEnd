import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ orderObj }) {
//   const deleteOrder = () => {
//     if (window.confirm('Delete This Post?')) {
//       deletePost(postObj.id).then(() => onUpdate());
//     }
//   };
  return (
    <div id="order-card" className="card">
      <div className="card-body">
        <h5 className="card-title"><b>Name:</b> {orderObj.name}</h5>
        <p className="card-text bold"><b>Email:</b> {orderObj.email}</p>
        <p className="card-text bold"><b>Phone Number:</b> {orderObj.phone}</p>
        <p className="card-text bold"><b>Order Status:</b> {orderObj.status}</p>
        <p className="card-text bold"><b>Order Type:</b> {orderObj.orderType}</p>
        <hr />
        <i id="view-details-btn" className=" btn btn-success">View</i>
        <i id="edit-order-btn" className=" btn btn-info">Edit</i>
        <i id="delete-order-btn" className="btn btn-danger">Delete</i>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    status: PropTypes.string,
    orderType: PropTypes.string,
  }).isRequired,
};
