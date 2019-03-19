import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CardOverlay = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg src="https://source.unsplash.com/random/150x200" alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>Card Title</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default CardOverlay;