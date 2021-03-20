import React from 'react';
import { Link } from 'react-router-dom';
import './carList.css'

const CarList = ({car}) => {
    const {id , title, imgUrl} = car


    return (
        <div className="car-style">
            <Link to={`/rideNow/${id}`}>
           <div style={{padding:'10px'}}>
               <img src={imgUrl} width="150px" alt=""/>
           </div>
           <div>
               <h3>{title}</h3>
               </div>
               </Link>
       </div>
    );
};

export default CarList;