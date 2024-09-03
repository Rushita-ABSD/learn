import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

const Apps = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/items');
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const addItem = async (item) => {
    try {
      const response = await axios.post('http://localhost:3001/items', item);
      setItems((prevItems) => [...prevItems, response.data]);
    } catch (err) {
      setError('Failed to add item.');
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:3001/items/${id}`, updatedItem);
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? updatedItem : item))
      );
    } catch (err) {
      setError('Failed to update item.');
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/items/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (err) {
      setError('Failed to delete item.');
    }
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ItemForm addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
};

export default Apps;
