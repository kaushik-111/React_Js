import React, { useState, useEffect } from 'react';

export default function Data_Table() {
    const [filtered, setFiltered] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [newItem, setNewItem] = useState({
        name: '',
        category: 'Fruit',
        Price: 0
    });

    const loadDataFromLocalStorage = () => {
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : [
            { id: 1, name: "Apple", category: "Fruit", Price: 5 },
            { id: 2, name: "Carrot", category: "Vegetable", Price: 4 },
            { id: 3, name: "Banana", category: "Fruit", Price: 1.5 },
            { id: 4, name: "Broccoli", category: "Vegetable", Price: 1 },
            { id: 5, name: "Mango", category: "Fruit", Price: 7 },
            { id: 6, name: "Orange", category: "Fruit", Price: 3 },
            { id: 7, name: "Cucumber", category: "Vegetable", Price: 2.5 },
            { id: 8, name: "Milk", category: "Dairy", Price: 1.2 },
            { id: 9, name: "Cheese", category: "Dairy", Price: 5.5 },
            { id: 10, name: "Rice", category: "Grains", Price: 2.5 },
            { id: 11, name: "Oats", category: "Grains", Price: 3.5 },
            { id: 12, name: "Wheat", category: "Grains", Price: 2.8 },
            { id: 13, name: "Coffee", category: "Beverages", Price: 4.5 },
            { id: 14, name: "Tea", category: "Beverages", Price: 2 },
            { id: 15, name: "Juice", category: "Beverages", Price: 3.2 },
            { id: 16, name: "Chips", category: "Snacks", Price: 1.8 },
            { id: 17, name: "Cookies", category: "Snacks", Price: 2.2 },
            { id: 18, name: "Chocolate", category: "Snacks", Price: 3.5 },
            { id: 19, name: "Chicken", category: "Meats", Price: 6.5 },
            { id: 20, name: "Beef", category: "Meats", Price: 8.5 },
            { id: 21, name: "Pork", category: "Meats", Price: 7.5 },
            { id: 22, name: "Cake", category: "Sweets", Price: 4.8 },
            { id: 23, name: "Candy", category: "Sweets", Price: 2.5 },
            { id: 24, name: "Ice Cream", category: "Sweets", Price: 3.7 },
            { id: 25, name: "Spinach", category: "Vegetable", Price: 3 },
            { id: 26, name: "Lettuce", category: "Vegetable", Price: 2.5 },
            { id: 27, name: "Peach", category: "Fruit", Price: 4.2 },
            { id: 28, name: "Strawberry", category: "Fruit", Price: 5 },
            { id: 29, name: "Pineapple", category: "Fruit", Price: 6.2 },
            { id: 30, name: "Grapes", category: "Fruit", Price: 3.8 },
            { id: 31, name: "Potato", category: "Vegetable", Price: 2 },
            { id: 32, name: "Eggplant", category: "Vegetable", Price: 2.3 },
            { id: 33, name: "Butter", category: "Dairy", Price: 3.5 },
            { id: 34, name: "Yogurt", category: "Dairy", Price: 1.8 },
            { id: 35, name: "Almond Milk", category: "Dairy", Price: 2.7 },
            { id: 36, name: "Soda", category: "Beverages", Price: 1.5 },
            { id: 37, name: "Lemonade", category: "Beverages", Price: 3 },
            { id: 38, name: "Sports Drink", category: "Beverages", Price: 2.5 },
            { id: 39, name: "Granola Bar", category: "Snacks", Price: 1.8 },
            { id: 40, name: "Pretzels", category: "Snacks", Price: 2.3 },
            { id: 41, name: "Trail Mix", category: "Snacks", Price: 3 },
            { id: 42, name: "Salmon", category: "Meats", Price: 9 },
            { id: 43, name: "Turkey", category: "Meats", Price: 7.8 },
            { id: 44, name: "Lamb", category: "Meats", Price: 10 },
            { id: 45, name: "Chocolate Cake", category: "Sweets", Price: 4.5 },
            { id: 46, name: "Brownies", category: "Sweets", Price: 3.2 },
            { id: 47, name: "Fudge", category: "Sweets", Price: 2.8 },
            { id: 48, name: "Cleaning Soap", category: "Household", Price: 1 },
            { id: 49, name: "Laundry Detergent", category: "Household", Price: 3 },
            { id: 50, name: "Toilet Paper", category: "Household", Price: 2 },
            { id: 51, name: "Shampoo", category: "Household", Price: 5 },
            { id: 52, name: "Dish Soap", category: "Household", Price: 1.5 },
            { id: 53, name: "Smartphone", category: "Electronics", Price: 500 },
            { id: 54, name: "Laptop", category: "Electronics", Price: 900 },
            { id: 55, name: "Headphones", category: "Electronics", Price: 100 },
            { id: 56, name: "Smartwatch", category: "Electronics", Price: 250 },
            { id: 57, name: "Tablet", category: "Electronics", Price: 350 }
        ];
    };

    const [data, setData] = useState(loadDataFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({
            ...newItem,
            [name]: value
        });
    };

    const handleAddItem = (e) => {
        e.preventDefault();
        const newItemData = {
            ...newItem,
            id: data.length + 1,  
        };

        setData([...data, newItemData]);
        setNewItem({ name: '', category: 'Fruit', Price: 0 });  
    };

    const filterData = filtered === "All" ? data : data.filter((item) => item.category === filtered);
    const searchData = filterData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedData = [...searchData].sort((a, b) =>
        sortOrder === "asc" ? a.Price - b.Price : b.Price - a.Price
    );

    return (
        <div className="table-container">
            <h1>Filtering, Searching and Sorting</h1>
            <div className="filters">
                <h2>Filter by Category</h2>
                <select onChange={(e) => setFiltered(e.target.value)} value={filtered}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Grains">Grains</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Meats">Meats</option>
                    <option value="Sweets">Sweets</option>
                    <option value="Household">Household</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>

            <div className="search-sort">
                <h2>Search by Name</h2>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <h2>Sort by Price</h2>
                <button onClick={() => setSortOrder("asc")}>Sort Ascending</button>
                <button onClick={() => setSortOrder("desc")}>Sort Descending</button>
            </div>

            <div className="add-item">
                <h2>Add New Item</h2>
                <form onSubmit={handleAddItem}>
                    <input
                        type="text"
                        name="name"
                        value={newItem.name}
                        onChange={handleInputChange}
                        placeholder="Enter item name"
                        required
                    />
                    <select
                        name="category"
                        value={newItem.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Fruit">Fruit</option>
                        <option value="Vegetable">Vegetable</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Grains">Grains</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Meats">Meats</option>
                        <option value="Sweets">Sweets</option>
                        <option value="Household">Household</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <input
                        type="number"
                        name="Price"
                        value={newItem.Price}
                        onChange={handleInputChange}
                        placeholder="Enter price"
                        required
                    />
                    <button type="submit">Add Item</button>
                </form>
            </div>

            <div className="table-wrapper">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.length > 0 ? (
                            sortedData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>${item.Price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="no-data">
                                    No Data Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
