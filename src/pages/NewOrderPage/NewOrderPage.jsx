import { useState, useEffect } from 'react';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(function() {
    console.log('NewOrderPage rendered');
  });
  
  useEffect(function() {
    console.log('NewOrderPage rendered for the first time');
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