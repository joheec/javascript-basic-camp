import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

function Card(props) {
  const countFullStars = Math.floor(props.business.rating);
  const fullStars = [...Array(countFullStars)];

  const countEmptyStars = 5 - Math.ceil(props.business.rating);
  const emptyStars = [...Array(countEmptyStars)];

  const countHalfStars = 5 - fullStars + emptyStars;
  const halfStars = [...Array(countHalfStars)];

  return (
    <div className="card">
      <div className="header">
        <div className="title">{props.business.name}</div>
        <div className="subtitle">{props.business.categories[0].title}</div>
      </div>
      <img src={props.business.image_url} alt="Business" />
      <div className="address">
        <div>{props.business.location.address1}</div>
        <div>{props.business.location.address2}</div>
        <div>{props.business.location.address3}</div>
        <div>{props.business.location.city + ', ' + props.business.location.zip_code}</div>
        <div>{props.business.display_phone}</div>
      </div>
      <div className="rating">
        {fullStars.map((_, i) => <span key={'fullStar-' + i}><FontAwesomeIcon icon={faStarFull} /></span>)}
        {halfStars.map((_, i) => <span key={'halfStar-' + i}><FontAwesomeIcon icon={faStarHalfAlt} /></span>)}
        {emptyStars.map((_, i) => <span key={'emptyStar-' + i}><FontAwesomeIcon icon={faStarEmpty} /></span>)}
      </div>
      <div className="cost">{props.business.price}</div>
    </div>
  );
}

export default Card;
