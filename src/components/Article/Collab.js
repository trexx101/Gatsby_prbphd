import React from 'react';
import { Col, Row } from 'reactstrap';
//import avatar from "../../images/slider/1";
import avatar from "../../images/logo/1.png";
import avatar2 from "../../images/logo/2.jpeg";
import avatar3 from "../../images/logo/3.png";
import avatar5 from "../../images/logo/5.png";
import avatar6 from "../../images/logo/6.png";

const Collab = (props) => {
  return (
    <div className="mb-6">
         <style>
          {
            `.publishers {
                max-width: 100%;
                height: auto;
              }`
          }
        </style>
        
        
        <div className="d-flex justify-content-center mt-4">
            <Row className="pt-4">
            <div className="d-flex justify-content-center mt-4">
            <Col sm="2" md="2">
            <img src={avatar} className="publishers"></img>
            </Col>
            <Col sm="2" md="2">
            <img src={avatar2} className="publishers"></img>
            </Col>
            <Col sm="2" md="2">
            <img src={avatar3} className="publishers"></img>
            </Col> 
            <Col sm="2" md="2">
            <img src={avatar5} className="publishers"></img>
            </Col>
            <Col sm="2" md="2">
            <img src={avatar6} className="publishers"></img>
            </Col>
            </div>
            </Row>
        </div>
    </div>
  );
};

export default Collab;