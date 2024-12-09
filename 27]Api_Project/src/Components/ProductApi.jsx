import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductApi() {
    const [record, setRecord] = useState([]);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [rate, setRate] = useState(3.9); 
    const [count, setCount] = useState(120);
    const [editID, setEditID] = useState(null);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const data = await axios.get('http://localhost:5000/post');
        console.log(data);
        setRecord(data.data);
    };

    const addData = async () => {
        if (title === "" || price === "" || description === "" || category === "" || image === "") {
            alert("All fields are required!");
            return;
        }
        
       if (editID) {
        const updateObj = {
            id:editID,
            title,
            price,
            description,
            category,
            image,
            rating: { rate, count }, 
        }
        await axios.put(`http://localhost:5000/post/${editID}` , updateObj);
        fetchApi();
        setEditID(null);
       }else{
        const object = {
            id: String(record.length + 1),
            title,
            price,
            description,
            category,
            image,
            rating: { rate, count }, 
        };
        await axios.post('http://localhost:5000/post', object);
        setRecord([...record, object]);
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
        setRate(3.9);
        setCount(120);
       }
    };

    const deleteData = async (id) => {
        console.log(id);
        await axios.delete(`http://localhost:5000/post/${id}`);
        fetchApi();
    }

    const editData = async (item) => {
        console.log(item);
        setEditID(item.id);
        setTitle(item.title);
        setPrice(item.price);
        setDescription(item.description);
        setCategory(item.category);
        setImage(item.image);
        setRate(item.rate);
        setCount(item.count);
    }
    return (
        <div className="container">
            <form className="form">
                <input
                    type="text"
                    placeholder="Enter Your Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Your Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Your Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter Your Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="number"
                    placeholder="Enter Rating Rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="input"
                    required
                />
                <input
                    type="number"
                    placeholder="Enter Rating Count"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    className="input"
                    required
                />
                <button type="button" onClick={addData} className="button">
                    Add Data
                </button>
            </form>
            <h1 className="heading">Product Records</h1>
            <div className="records">
                {record &&
                    record.map((item, index) => (
                        <div key={index} className="record-card">
                            <img src={item.image} alt={item.title} className="record-image" />
                            <h3 className="record-title">{item.title}</h3>
                            <p className="record-price">Price: ${item.price}</p>
                            <p className="record-description">
                                {item.description.length > 50
                                    ? `${item.description.slice(0, 50)}...`
                                    : item.description}
                            </p>
                            <p className="record-category">Category: {item.category}</p>
                            <p className="record-rating">
                                Rating: {item.rating?.rate} ({item.rating?.count} reviews)
                            </p>
                            <p>
                                <button onClick={()=>deleteData(item.id)}>Delete</button>
                                <button onClick={()=>editData(item)}>Edit</button>
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}
