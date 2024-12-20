import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseconfig';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (!email || !pass) {
      alert('All fields are required.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      alert('Login successful!');
      navigate('/dashboard', { replace: true });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('No user found with this email. Please sign up first.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Incorrect password. Please try again.');
      } else {
        alert('An error occurred during login. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div id="lg">
      <form onSubmit={(event) => handleSignIn(event)}>
        <input
          type="email"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">
          <b>Login</b>
        </button>

        <div>
          <Link to={'/'}>SignUp?</Link>
        </div>
      </form>
    </div>
  );
}
