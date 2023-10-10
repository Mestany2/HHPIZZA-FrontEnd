import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReviewCard from '../components/ReviewCard';
import { getOrderReview } from '../Api/ReviewCalls';

export default function ReviewPage() {
  const router = useRouter();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const orderObj = JSON.parse(router.query.orderObj);
    getOrderReview(orderObj?.id)?.then((data) => {
      setReview(data);
      console.warn('my review', review);
    });
  }, []);

  return (
    <>
      <br />
      <h1 id="welcome-title"> Order Review</h1>
      <br />
      <div id="text-style" className="items-add-btn">
        <div className="feed-page-cont d-flex flex-wrap justify-content-center align-content-center text-center">
          <ReviewCard reviewObj={review} />
        </div>
      </div>
    </>
  );
}
