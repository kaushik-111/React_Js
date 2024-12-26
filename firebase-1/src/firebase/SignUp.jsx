import React, { useState } from 'react';
import { auth, db, provider } from '../../firebaseconfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const data = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", data.user.uid), {
      name,
      age,
      city,
      email,
    });
    navigate("/dashboard", { replace: true });   
  };

  const handleGoogleSignIn = async () => {
 await signInWithPopup(auth, provider);
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Enter name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter age..."
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter city..."
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          <b>SignUp</b>
        </button>
        <div>
          <Link to={"/login"}>LogIn?</Link>
        </div>
        <button type="button" onClick={handleGoogleSignIn}>SignIn With Google</button>
      </form>
    </>
  );
}
