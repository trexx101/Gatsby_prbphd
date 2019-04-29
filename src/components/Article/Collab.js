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
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }



  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

render() {
  const { activeIndex } = this.state;
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="logo-size img-responsive center-block"
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <img className="img-fluid" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="mb-6">
         <style>
          {
            `.publishers {
                max-width: 100%;
                height: auto;
              }
              .logo-size{
                text-align: center;
                height: 200px;

                img{
                  
                  width: 30%; 
                  margin: auto;
                }
              }
              `
          }
        </style>
        <Carousel
        activeIndex={activeIndex}
        ride="carousel"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
      </Carousel>
        
    </div>
  );
}
}

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
};

export default Collab;