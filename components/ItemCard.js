import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteItem } from '../Api/ItemCalls';

export default function ItemCard({ itemObj, onUpdate }) {
  const router = useRouter();
  const deleteTheItem = () => {
    if (window.confirm('Delete This Order?')) {
      deleteItem(itemObj.id).then(() => onUpdate());
    }
  };

  const updateForm = () => {
    router.push({
      pathname: '/ItemForm',
      query: {
        itemObj: JSON.stringify(itemObj),
      },
    });
  };

  return (
    <div id="details-card">
      <div className="card-body">
        <h5 className="card-title"><b>Name:</b> {itemObj.name}</h5>
        <p className="card-text bold"><b>Price:</b> {itemObj.price}</p>
        <hr />
        <button type="button" id="edit-order-btn" className=" btn btn-info" onClick={updateForm}>Edit</button>
        <button type="button" id="delete-order-btn" className="btn btn-danger" onClick={deleteTheItem}>Delete</button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
