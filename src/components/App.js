import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
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

  const countFullStars = Math.floor(sampleBusiness.rating);
  const fullStars = [...Array(countFullStars)];

  const countEmptyStars = 5 - Math.ceil(sampleBusiness.rating);
  const emptyStars = [...Array(countEmptyStars)];

  const countHalfStars = 5 - fullStars + emptyStars;
  const halfStars = [...Array(countHalfStars)];

  return (
    <div className="card">
      <div className="header">
        <div className="title">{sampleBusiness.name}</div>
        <div className="subtitle">{sampleBusiness.categories[0].title}</div>
      </div>
      <img src={sampleBusiness.image_url} alt="Business" />
      <div className="address">
        <div>{sampleBusiness.location.address1}</div>
        <div>{sampleBusiness.location.address2}</div>
        <div>{sampleBusiness.location.address3}</div>
        <div>{sampleBusiness.location.city + ', ' + sampleBusiness.location.zip_code}</div>
        <div>{sampleBusiness.display_phone}</div>
      </div>
      <div className="rating">
        {fullStars.map((_, i) => <span key={'fullStar-' + i}><FontAwesomeIcon icon={faStarFull} /></span>)}
        {halfStars.map((_, i) => <span key={'halfStar-' + i}><FontAwesomeIcon icon={faStarHalfAlt} /></span>)}
        {emptyStars.map((_, i) => <span key={'emptyStar-' + i}><FontAwesomeIcon icon={faStarEmpty} /></span>)}
      </div>
      <div className="cost">{sampleBusiness.price}</div>
    </div>
  );
}

export default App;
