import React, { useState, useEffect } from 'react';
import yelp from '../serviceYelp';
import Card from './Card.js';
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

  if (businesses.length === 0) {
    return null;
  }

  return (
    <div className="reviews">
      {
        businesses.map(store => <Card business={store} />)
      }
    </div>
  );
}

export default App;
