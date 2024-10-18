import React, { useState, useRef } from 'react';
import '../App.css'

export default function To_Do_List() {
    const [data, setData] = useState([]);
    const firstNameRef = useRef();
    const surNameRef = useRef();
    const dobRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const addressRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            firstName: firstNameRef.current.value,
            surName: surNameRef.current.value,
            dob: dobRef.current.value,
            age: ageRef.current.value,
            gender: genderRef.current.value,
            address: addressRef.current.value,
        };
        console.log(newStudent);
        if (newStudent.firstName.trim() === "" || newStudent.surName.trim() === "" || newStudent.dob.trim === "" || newStudent.age.trim === "" || newStudent.gender.trim === "" || newStudent.address.trim === "") {
            alert("Please enter all values");
            return;
        } else {
            setData([...data, newStudent]);
            firstNameRef.current.value = '';
            surNameRef.current.value = '';
            dobRef.current.value = '';
            ageRef.current.value = '';
            genderRef.current.value = '';
            addressRef.current.value = '';
        } 
    };

    return (
        <div>
            <center><h1 style={{color:'white'}}>User Information</h1></center>
            <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <input type="text" placeholder='Enter Your FirstName...' ref={firstNameRef} />
                <input type="text" placeholder='Enter Your SurName...' ref={surNameRef} />
                <input type="date" placeholder='Enter Your Date Of Birth...' ref={dobRef} />
                <input type='number' placeholder='Enter Your Age...' ref={ageRef} />
                <input type="text" placeholder='Enter Your Gender...' ref={genderRef} />
                <input type="text" placeholder='Enter Your Address...' ref={addressRef} />
                <button type='submit'>Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Sur Name</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, i) => (
                        <tr key={i}>
                            <td>{student.firstName}</td>
                            <td>{student.surName}</td>
                            <td>{student.dob}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
