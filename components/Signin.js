import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { logo } from '../Images/hhpw-record.png';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <div>
        <div id="text-style">
          <h1 id="welcome-title"> Welcome to Hip-Hop Pizza and Wangs</h1>
          <Image src={logo} alt="store logo" />
          <div id="login-button"><div />
          </div>
          <br />
        </div>
        <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Signin;
