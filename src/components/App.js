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
  const sampleBusiness = businesses[0];

  if (businesses.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <div className="header">
        <div className="title">{sampleBusiness.name}</div>
        <div className="subtitle">{sampleBusiness.categories[0].title}</div>
      </div>
      <img src={sampleBusiness.image_url} alt="Business" />
      <div>{sampleBusiness.location.address1}</div>
      <div>{sampleBusiness.location.address2}</div>
      <div>{sampleBusiness.location.address3}</div>
      <div>{sampleBusiness.location.city + ', ' + sampleBusiness.location.zip_code}</div>
      <div>{sampleBusiness.display_phone}</div>
      <div>{sampleBusiness.rating}</div>
      <div>{sampleBusiness.price}</div>
    </div>
  );
}

export default App;
