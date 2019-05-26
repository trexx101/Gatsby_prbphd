import React from 'react';
import { Card, CardTitle, CardText,Button, CardImg, CardImgOverlay } from 'reactstrap';

const CardOverlay = (props) => {
  return (
    <div className="mb-3">
      <Card inverse>
        <CardTitle >{props.data}</CardTitle>
        <Button src={props.url}>Open</Button>
      </Card>
    </div>
  );
};

export default CardOverlay;