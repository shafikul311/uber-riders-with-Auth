import React from "react";
import { CardGroup } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import { useParams } from "react-router";
import PriceCart from "../PriceCart/PriceCart";

const RideNow = () => {
  

  // const handleButton = (e)=>{
  //   e.preventDefault();
  // }
  return (
    <div>
      <CardGroup className="m-3">
        <Card className="m-2 p-5 justify-content-center">
          <h3>Please Search Your Destination</h3>

          <form className="p-2">

                <h6>pick from</h6>
                <input className="form-control" type="text" />

                <h6>pick To</h6>
                <input className="form-control" type="text" />

                <h6>Date</h6>
                <input className="form-control" type="date" />
                <br/>
                
                <h6>Time</h6>
                <input className="form-control" type="time" />

                <br/>
                <br />
                <button className ="btn btn-warning">Search</button>
          </form>
        </Card>

        <Card className="p-4">
          <h3> Find Your Location</h3>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.702518325548!2d90.3451036730634!3d23.79456245307987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616247755024!5m2!1sen!2sbd"
              style={{ width: "800", height: "600", border: 0 }}
              allowfullscreen="allowFullScreen"
              loading="lazy"
              title="map"
            ></iframe>
          </p>
        </Card>
      </CardGroup>

      <PriceCart></PriceCart>
   
    </div>
  );
};

export default RideNow;


