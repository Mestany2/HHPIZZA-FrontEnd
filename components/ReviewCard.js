import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function ReviewCard({ reviewObj }) {
  const router = useRouter();

  const backOrder = () => {
    router.push({
      pathname: '/OrderPage',
    });
  };

  return (
    <div id="review-card">
      <div className="card-body">
        <h5 className="card-title">Rating: {reviewObj[0]?.rating}</h5>
        <p className="card-text bold"><b>Review:</b> {reviewObj[0]?.content}</p>
        <hr />
        <button type="button" id="edit-order-btn" className=" btn btn-info" onClick={backOrder}>Back to Orders</button>
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  reviewObj: PropTypes.shape({
    rating: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
};
