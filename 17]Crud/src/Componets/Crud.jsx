import React, { useEffect, useState } from 'react';

export default function Crud() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [hobby, setHobby] = useState("");
    const [city, setCity] = useState("");
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "", age === "", gender === " ", hobby === "", city === "") {
            alert("All fields are required");
        } else {
            if (editIndex === null) {
                // Add new entry
                const obj = { id: Date.now(), name, age, gender, hobby, city };
                const newRecord = [...record, obj];
                setRecord(newRecord);
                localStorage.setItem("Students", JSON.stringify(newRecord));
            } else {
                // Update existing entry
                const updatedRecords = record.find((item) => item.id === editIndex);
                updatedRecords.id = editIndex;
                updatedRecords.name = name;
                updatedRecords.age = age;
                updatedRecords.gender = gender;
                updatedRecords.hobby = hobby;
                updatedRecords.city = city;
                localStorage.setItem("Students", JSON.stringify(record));
            }
            setName("");
            setAge("");
            setGender("");
            setHobby("");
            setCity("");
            setEditIndex(null);
        }

    };

    const handleDelete = (id) => {
        const updatedRecords = record.filter((item) => item.id !== id);
        setRecord(updatedRecords);
        localStorage.setItem("Students", JSON.stringify(updatedRecords));
    };

    const handleEdit = (id) => {
        const singleData = record.find((item) => item.id === id);
        setName(singleData.name);
        setAge(singleData.age);
        setGender(singleData.gender);
        setHobby(singleData.hobby);
        setCity(singleData.city);
        setEditIndex(id);
    };

    return (
        <div >
            <h1 >Student Information Form</h1>

            <form onSubmit={handleSubmit}>
                <label >Enter Your Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label >Enter Your Age</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />

                <div >
                    <label>Gender</label>
                    <label >
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        Male
                    </label>
                    <label >
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        />
                        Female
                    </label>
                </div>

                <label >Select Hobby</label>
                <select

                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    required
                >
                    <option value="">Select Hobby</option>
                    <option value="Reading">Reading</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                </select>

                <label >Enter Your City</label>
                <input

                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />

                <button

                    type="submit"
                >
                    {editIndex === null ? "Submit" : "Update"}
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th >City</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && record.length > 0 ? (
                            record.map((e) => (
                                <tr key={e.id} >
                                    <td >{e.id}</td>
                                    <td >{e.name}</td>
                                    <td >{e.age}</td>
                                    <td >{e.gender}</td>
                                    <td >{e.hobby}</td>
                                    <td >{e.city}</td>
                                    <td >
                                        <button onClick={() => handleEdit(e.id)}>Edit</button>
                                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No records available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}


