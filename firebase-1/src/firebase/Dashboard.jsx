import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
        console.log(data.uid);
      }
    });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [user]);

  const fetchUser = async () => {
    if (user) {
      await getDoc(doc(db, "users", user)).then((data) => {
        setUserData(data.data());
        console.log(data.data());
      });
    }
  };

  return (
    <div>
      <h1>
        Welcome {userData ? userData.name : "Loading..."} to the Dashboard
      </h1>
    </div>
  );
}
