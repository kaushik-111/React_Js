import React, { useEffect, useState } from 'react';

export default function Crud() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [mobile, setMobile] = useState("");  
    const [email, setEmail] = useState(""); 
    const [gender, setGender] = useState("");
    const [hobby, setHobby] = useState("");
    const [city, setCity] = useState(""); 
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name === "" || age === "" || gender === "" || hobby === "" || city === "" || mobile === "" || email === "") {
            alert("All fields are required");
            setMessage("All fields are required.");
            return;
        }
    
        if (mobile.length !== 10 || isNaN(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            setMessage("Please enter a valid 10-digit mobile number.");
            return;
        }
    
        const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid Gmail address.");
            setMessage("Please enter a valid Gmail address.");
            return;
        }
    
        if (editIndex === null) {
            // Add new entry
            const obj = { id: Date.now(), name, age, mobile, email, gender, hobby, city };
            const newRecord = [...record, obj];
            setRecord(newRecord);
            localStorage.setItem("Students", JSON.stringify(newRecord));
            alert("Entry added successfully!");
            setMessage("Entry added successfully!");
        } else {
            // Update existing entry    
            const updatedRecords = record.find((item) => item.id === editIndex)
            updatedRecords.id = editIndex;
            updatedRecords.name = name;
            updatedRecords.age = age;
            updatedRecords.mobile = mobile;
            updatedRecords.email = email;
            updatedRecords.gender=gender;
            updatedRecords.hobby=hobby;
            updatedRecords.city=city;
            localStorage.setItem("Students", JSON.stringify(record));
            alert("Entry updated successfully!");
            setMessage("Entry updated successfully!");
        }
    
        setName("");
        setAge("");
        setMobile("");
        setEmail("");
        setGender("");
        setHobby("");
        setCity("");
        setEditIndex(null);
    };
    

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this entry?")) {
            const updatedRecords = record.filter((item) => item.id !== id);
            setRecord(updatedRecords);
            localStorage.setItem("Students", JSON.stringify(updatedRecords));
            alert("Entry deleted successfully");
            setMessage("Entry deleted successfully.");
        }
    };

    const handleEdit = (id) => {
        const singleData = record.find((item) => item.id === id);
        setName(singleData.name);
        setAge(singleData.age);
        setMobile(singleData.mobile);
        setEmail(singleData.email);
        setGender(singleData.gender);
        setHobby(singleData.hobby);
        setCity(singleData.city);
        setEditIndex(id);
    };

    return (
        <div>
            <h1>Student Information Form</h1>
            <h1>{editIndex === null ? "Add New Entry" : "Edit Entry"}</h1>

            {message && <p style={{ color: "green" }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Enter Your Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <label>Enter Your Mobile Number</label>
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <label>Enter Your Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <label>Gender</label>
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                </div>

                <label>Select Hobby</label>
                <select
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                >
                    <option value="">Select Hobby</option>
                    <option value="Reading">Reading</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                </select>

                <label>Enter Your City</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">
                    {editIndex === null ? "Submit" : "Update"}
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {record && record.length > 0 ? (
                        record.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.mobile}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                                <td>{e.hobby}</td>
                                <td>{e.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(e.id)} className="edit">Edit</button>
                                    <button onClick={() => handleDelete(e.id)} className="delete">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No records available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
