import React, { useState } from 'react';

const ItemList = ({ items, updateItem, deleteItem }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditingName(item.name);
  };

  const handleUpdate = (id) => {
    updateItem(id, { id, name: editingName });
    setEditingId(null);
    setEditingName('');
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {editingId === item.id ? (
            <>
              <input
                type="text"
                value={editingName}
                onChange={(e) => setEditingName(e.target.value)}
              />
              <button onClick={() => handleUpdate(item.id)}>Update</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {item.name}
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
