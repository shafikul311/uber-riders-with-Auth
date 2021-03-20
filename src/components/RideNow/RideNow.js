import React from "react";
import { CardGroup } from "react-bootstrap";
import { images } from "../images/Map.png";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/Form";
import { Button } from "bootstrap";
import { useParams } from "react-router";

const RideNow = () => {
  const { id } = useParams();
  return (
    <div>
      <CardGroup className="m-3">
        <Card className="m-2 p-5 justify-content-center">
          <h3>Please Search Your Destination</h3>

          <form>
                <input type="date" />

                <h5>pick from</h5>
                <input type="text" />

                <h5>pick To</h5>
                <input type="text" />
                <br/>
                <br />
                <button >Search</button>
          </form>
        </Card>

        <Card className="p-4">
          <h3> Find Your Location</h3>
          <p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.702518325548!2d90.3451036730634!3d23.79456245307987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1616247755024!5m2!1sen!2sbd"
              style={{ width: "800", height: "600", border: 0 }}
              allowfullscreen="yes"
              loading="lazy"
            ></iframe>
          </p>
        </Card>
      </CardGroup>
    </div>
  );
};

export default RideNow;
