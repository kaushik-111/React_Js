import React, { useState } from 'react';

export default function FormValidation() {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [sellerName, setSellerName] = useState("");
    const [email, setEmail] = useState("");
    const [cat, setCat] = useState("");
    const [color, setColor] = useState(""); 
    const [size, setSize] = useState(""); 
    const [brand, setBrand] = useState(""); 
    const [data, setData] = useState([]);
    const [error, setError] = useState(""); 
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!productName || !productPrice || !companyName || !sellerName || !email || !cat) {
            setError("Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (isNaN(productPrice) || productPrice <= 0) {
            setError("Please enter a valid product price.");
            return;
        }

        const obj = {
            companyName,
            productName,
            productPrice,
            sellerName,
            email,
            cat,
            color,
            size,
            brand
        };

        setData([...data, obj]);
        setCompanyName("");
        setProductName("");
        setProductPrice("");
        setSellerName("");
        setEmail("");
        setCat("");
        setColor("");
        setSize("");
        setBrand("");
        setError(""); 
        setSubmitted(true); 
    };

    return (
        <div>
            <h1>The Little Wardrobe Project</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{ color: 'red' }}>{error}</p>} 
                {submitted && <p style={{ color: 'green', textAlign: 'center' }}>Thank you for your submission!</p>} 

                <input
                    type="text"
                    placeholder='Enter Company Name'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter Product Name'
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='Enter Product Price'
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Enter Seller Name'
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <select value={cat} onChange={(e) => setCat(e.target.value)} required>
                    <option hidden>Category</option>
                    <option value="Everyday Wear">Everyday Wear</option>
                    <option value="Special Occasion">Special Occasion</option>
                    <option value="Activewear">Activewear</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Accessories">Accessories</option>
                </select>

                {cat && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter color..."
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter size..."
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Enter brand..."
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </>
                )}

                <button type='submit'>Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Seller Name</th>
                        <th>Email</th>
                        <th>Category</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) => (
                        <tr key={i}>
                            <td>{e.companyName}</td>
                            <td>{e.productName}</td>
                            <td>{e.productPrice}</td>
                            <td>{e.sellerName}</td>
                            <td>{e.email}</td>
                            <td>{e.cat}</td>
                            <td>{e.color}</td>
                            <td>{e.size}</td>
                            <td>{e.brand}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
