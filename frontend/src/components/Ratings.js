import React from 'react'
// import { propTypes } from 'react-bootstrap/esm/Image';

const Ratings = ({value, Text, color}) => {
  return (
    <div className='ratings'>
        <span>
            <i style={{color}} className={
                value>=1
                ? 'fa-solid fa-star' 
                : value>=0.5
                ? 'fa-solid fa-star-half-stroke' 
                : 'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={
                value>=2
                ? 'fa-solid fa-star' 
                : value>=1.5
                ? 'fa-solid fa-star-half-stroke' 
                : 'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={
                value>=3
                ? 'fa-solid fa-star' 
                : value>=2.5
                ? 'fa-solid fa-star-half-stroke' 
                : 'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={
                value>=4
                ? 'fa-solid fa-star' 
                : value>=3.5
                ? 'fa-solid fa-star-half-stroke' 
                : 'fa-regular fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={
                value>=5
                ? 'fa-solid fa-star' 
                : value>=4.5
                ? 'fa-solid fa-star-half-stroke' 
                : 'fa-regular fa-star'}></i>
        </span>
        <span>{Text && Text}</span>
    </div>
  )
}

// Ratings.prototype={
//     value: propTypes.number.isRequired,
//     Text: propTypes.string.isRequired,
//     color: propTypes.string,
// }

export default Ratings;