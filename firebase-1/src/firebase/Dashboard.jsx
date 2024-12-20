import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseconfig";
import "../Dashboard.css";

export default function DashBoard() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState();
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUser(data.uid);
      } else {
        navigate("/login");
      }
    });
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchUser();
      fetchData();
    }
  }, [user]);

  const fetchUser = async () => {
    try {
      const userDoc = await getDoc(doc(db, "Users", user));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const dataSnapshot = await getDocs(collection(db, "data"));
      const userRecords = dataSnapshot.docs
        .filter((doc) => doc.data().userId === user)
        .map((doc) => ({ docId: doc.id, ...doc.data() }));
      setRecord(userRecords);
    } catch (error) {
      console.error("Error fetching records: ", error);
    }
  };

  const handleSubmit = async () => {
    if (!name || !sub || !email || !phone) {
      alert("All fields are required.");
      return;
    }

    const newRecord = { name, sub, email, phone, userId: user };
    try {
      if (editIndex === null) {
        const docRef = await addDoc(collection(db, "data"), newRecord);
        setRecord([...record, { ...newRecord, docId: docRef.id }]);
      } else {
        await updateDoc(doc(db, "data", editIndex), newRecord);
        fetchData();
      }
      setName("");
      setSub("");
      setEmail("");
      setPhone("");
      setEditIndex(null);
    } catch (error) {
      console.error("Error submitting record: ", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await deleteDoc(doc(db, "data", id));
      setRecord(record.filter((item) => item.docId !== id));
    } catch (error) {
      console.error("Error deleting record: ", error);
    }
  };

  const handleEdit = (id) => {
    const recordToEdit = record.find((item) => item.docId === id);
    setEditIndex(id);
    setName(recordToEdit.name);
    setSub(recordToEdit.sub);
    setEmail(recordToEdit.email);
    setPhone(recordToEdit.phone);
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="dashboard" id="ds">
      <div id="form">
        <form className="dashboard-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <input
            type="text"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
            placeholder="Enter subject"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
          <button type="button" onClick={handleSubmit}>
            {editIndex ? "Update" : "Add"}
          </button>
          <button type="button" onClick={signOut}>
            Sign Out
          </button>
        </form>
      </div>
      <div id="table">
        <div className="table-container">
          {record.length > 0 ? (
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {record.map((item) => (
                  <tr key={item.docId}>
                    <td>{item.name}</td>
                    <td>{item.sub}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button onClick={() => handleEdit(item.docId)}>Edit</button>
                      <button onClick={() => handleDelete(item.docId)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <center><p>No records found.</p></center>
          )}
        </div>
      </div>
    </div>
  );
}
