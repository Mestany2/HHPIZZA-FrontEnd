import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { checkUser, signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import RegisterForm from '../components/RegisterForm';

function Home() {
  const { user } = useAuth();
  const [myUser, setMyUser] = useState();

  const onUpdate = () => {
    checkUser(user.uid).then((data) => setMyUser(data[0]));
  };

  useEffect(() => {
    checkUser(user.uid).then((data) => setMyUser(data[0]));
  }, []);

  return (
    <>
      {myUser?.uid === user?.uid ? (
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '50vh',
            padding: '30px',
            maxWidth: '400px',
            margin: '0 auto',
          }}
        >
          <h1 className="word" data-animation="slide" id="welcome-title"> Welcome {user.fbUser.displayName}!</h1>

          <br />
          <Link passHref href="/OrderPage">
            <Button type="button" className="btn btn-success btn-lg btn-3" id="view-order">View Orders</Button>
          </Link>
          <br />
          <br />
          <Link passHref href="/CreateOrderForm">
            <Button type="button" className="btn btn-success btn-lg btn-3" id="create-order-landing">Create an Order</Button>
          </Link>
          <br />
          <br />
          <Link passHref href="/Revenue">
            <Button type="button" className="btn btn-success btn-lg btn-3" id="view-rev">View Revenue</Button>
          </Link>
          <br />
          <br />
          <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
            Sign Out
          </Button>
        </div>
      ) : (<RegisterForm user={user} onUpdate={onUpdate} />)}
    </>
  );
}

export default Home;
