import React from 'react';
import { Col, Row } from 'reactstrap';
import { Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, UncontrolledCarousel } from 'reactstrap';
import PropTypes from 'prop-types';

//import avatar from "../../images/slider/1";
import avatar from "../../images/logo/1.png";
import avatar2 from "../../images/logo/2.jpeg";
import avatar3 from "../../images/logo/3.png";
import avatar5 from "../../images/logo/5.png";
import avatar6 from "../../images/logo/6.png";
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const items = [
  {
    src: avatar,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: avatar2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: avatar3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];
class Collab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

render() {
  const { activeIndex } = this.state;
  const slides = items.map((item) => {
    return (
      <div class="slide">
        <img className="img-fluid" src={item.src} alt={item.altText} height="100" width="250"/>
		  </div>
        
      
    );
  });

  return (
    <div className="mb-6">
        <div className="slider">
	        <div className="slide-track">
            {slides}
          </div>
        </div>
      <style jsx>{`
        .bigbody {
          align-items: center;
          background: #E3E3E3;
          display: flex;
          height: 100vh;
          justify-content: center;
        }
        
        @-webkit-keyframes scroll {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(calc(-250px * 7));
                    transform: translateX(calc(-250px * 7));
          }
        }
        
        @keyframes scroll {
          0% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
          }
          100% {
            -webkit-transform: translateX(calc(-250px * 7));
                    transform: translateX(calc(-250px * 7));
          }
        }
        .slider {
          background: white;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
          height: 100px;
          margin: auto;
          overflow: hidden;
          position: relative;
          width: 960px;
        }
        .slider::before, .slider::after {
          background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
          content: "";
          height: 100px;
          position: absolute;
          width: 200px;
          z-index: 2;
        }
        .slider::after {
          right: 0;
          top: 0;
          -webkit-transform: rotateZ(180deg);
                  transform: rotateZ(180deg);
        }
        .slider::before {
          left: 0;
          top: 0;
        }
        .slider .slide-track {
          -webkit-animation: scroll 40s linear infinite;
                  animation: scroll 40s linear infinite;
          display: flex;
          width: calc(250px * 14);
        }
        .slider .slide {
          height: 100px;
          width: 250px;
        }
        
      `}</style>
    </div>
  );
}
}

export default Collab;