import React, { useState, useEffect } from 'react';
import yelp from '../serviceYelp';
import './App.css';

function App() {
  // Keeps track of displayed businesses
  const [businesses, setBusinesses] = useState([]);

  // Gets Initial Businesses from Yelp
  useEffect(() => {
    yelp.getSearchResults('ice cream', 'Portland, OR')
      .then(res => setBusinesses(res.businesses));
  }, [])

  // Prints businesses
  console.log({ businesses });

  return null;
}

export default App;
