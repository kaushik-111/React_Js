import React from 'react'
import { useState } from 'react'
import { auth, db } from '../../firebaseconfig';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        if (!name || !age || !city || !email || !password ) {
            alert("All fields are required.");
            return;
          }
        event.preventDefault();
        
        await createUserWithEmailAndPassword(auth,email,password)
        .then((data) => {
            setDoc(doc(db, "users", data.user.uid), {
                name, age, city, email,
            })
            navigate("/dashboard", {replace: true});
        })
    }
    return (
        <>
            <form onSubmit={(event) => handleSignUp(event)}>
                <input type="text" placeholder='Enter name...' onChange={e => setName(e.target.value)} />
                <input type="text" placeholder='Enter age...' onChange={e => setAge(e.target.value)}  />
                <input type="text" placeholder='Enter city...' onChange={e => setCity(e.target.value)}  />
                <input type="text" placeholder='Enter email...' onChange={e => setEmail(e.target.value)}  />
                <input type="text" placeholder='Enter password...' onChange={e => setPassword(e.target.value)}  />
                <button type="submit"><b>SignUp</b></button>
                <div>
                <Link to={"/login"}>LogIn?</Link>
                </div>  
            </form>
        </>
    )
}