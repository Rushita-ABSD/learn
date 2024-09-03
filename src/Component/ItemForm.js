import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addItem({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
