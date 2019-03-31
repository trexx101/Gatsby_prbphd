import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CardOverlay = (props) => {
  return (
    <div className="mb-3">
      <Card inverse>
        <CardImg src={props.data} alt="Card image cap" />
        <CardImgOverlay>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardOverlay;