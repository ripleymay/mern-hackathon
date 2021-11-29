import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);

  // useEffect(function() {
  //   console.log('NewOrderPage rendered');
  // });
  
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    }
    getItems();
  }, []);
  // the empty dependency array above will result in 
  // the function running after the FIRST render
  // only

  return (
    <>
      <h1>NewOrderPage</h1>
      <button onClick={() => setMenuItems(menuItems + 1)}>Trigger re-render</button>
    </>
  );
}