import React from "react";
import Card from "react-bootstrap/Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router";


const PriceCart = () => {

  // const { imgUrl} = useParams();
  // console.log(imgUrl)

  return (
    <div>
      <Card style={{ width: "25rem" }} className="m-5 p-3">
        <div style={{ backgroundColor: "orange", borderRadius: "5px" }}>
          <div>
            <h3>Mirpur -1</h3>
          </div>
          To
          <div>
            <h3>Dhanmondi</h3>
          </div>
        </div>

        <Card.Body>
          <div
            style={{
              borderRadius: "5px",
              paddingBottom: "10px",
              justifyContent: "center",
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
            }}
          >
            <img src="" alt="" /> 
            <h3>{} <FontAwesomeIcon icon={faUser} /> -4    $105</h3>
          </div>
          <div
            style={{
              borderRadius: "5px",
              paddingBottom: "7px",
              justifyContent: "center",
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
            }}
          >
            <img src="" alt="" />
            <h3>{} <FontAwesomeIcon icon={faUser} /> -4 $105</h3>
          </div>
          <div
            style={{
              borderRadius: "5px",
              paddingBottom: "7px",
              justifyContent: "center",
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
            }}
          >
            <img src="" alt="" />
            <h3>{} <FontAwesomeIcon icon={faUser} /> -4 $105</h3>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceCart;
