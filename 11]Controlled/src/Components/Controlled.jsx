import React, { useState } from 'react';

export default function Controlled() {
    const [name, setName] = useState("");
    const [ID , setID] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            alert("Please enter all Value.");
            return;
        }
        else {
            const newData = {
                name ,ID
            };
            setData([...data, newData]);
            setName("");
            setID("");
        }
    };

    return (
        <div>
            <h1>Controlled</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder='Enter Your ID' value={ID} onChange={(e) => setID(e.target.value)}/>
                <input
                    type="text"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => (
                            <tr key={i}>
                                <td>{e.ID}</td>
                                <td>{e.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
