import React, { useState } from 'react';

function UseStateDemo() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]); // Initialize items as an empty array
  const handleAddItem = () => {
    setItems([...items, item]);
    setItem('');
  }
  const handleDelItem = (itemToDelete) => {
    const filteredItems = items.filter((it) => it !== itemToDelete);
    setItems(filteredItems);
  }
  const tdata = items.map((it) => (
    <tr key={it}>
      <td>
        <span>{it}</span>
      </td>
      <td>
        <button onClick={() => handleDelItem(it)}>X</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <input
        type="text"
        size="20"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add</button>
      <h1>User list</h1>
      <table border="1" align="center">{tdata}</table>
    </div>
  );
}
export default UseStateDemo;