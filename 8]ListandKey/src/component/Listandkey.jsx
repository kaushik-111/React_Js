import React, { useState, useEffect, useRef } from 'react';

export default function Listandkey() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();
  const handleclick = () => {
    console.log(inputRef.current.value);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
      ]);
    }, 55000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>List and Key</h1>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <h2>{item.id} - {item.name}</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

      <input type="text" ref={inputRef} />
      <button onClick={handleclick}>click</button>
    </>
  );
}
