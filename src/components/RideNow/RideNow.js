import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";

const RideNow = () => {

    // const{id} = useParams();
  return (
                <Container>
                <Row>
                    <Col>
                    <div>
                        <h3>Please Search Your Destination</h3>
                        <input
                        type="text"
                        name="search here"
                        id=""
                        placeholder="search here"
                        />
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <h3> Find Your Location</h3>
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>
                    </Col>
                </Row>
                </Container>
  );
};

export default RideNow;
