import React from "react";
import Slider from "react-slick";
import { Card, CardText, CardTitle, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Avatar from "../Util/Avatar";
import {isMobile} from 'react-device-detect';


class SimpleSlider extends React.Component {


  render() {
    var settings = {
      dots: true,  
      infinite: true,
      speed: 500,  
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    const quote = (() => {
        return <i className="fas fa-quote-left" ></i>
    });
    const size = 90;

    const { entries: { entryList } } = this.props;

    /*this.props.entries.forEach(element => {
      console.log("Testimonials from :: " +element.node.acf.name)
    });*/

    

    const slides = this.props.entries.map((item) => {

      let { name, role, quote, stars, pictureLink } = item.node.acf;

      //stars element to arra array
      const starList = []
      var i;
      if(stars > 5){
        stars = 5;
      }

      for (i=0;i<stars;i++) {
        starList.push(<i className="fas fa-star" />)
      }

        return (
        <div className="px-3 row">
          <Card body className="text-center col-sm-12 col-lg-12 col-md-12 padding">
            <Avatar size={size} src={pictureLink.source_url} className="mx-auto" rounded/>
            <Link to="/" ><CardTitle>{name}</CardTitle></Link>
            <CardText>{role}</CardText>
            <span className="iconstar">
            {starList}
            </span>
            
            <p><i className="fas fa-quote-left fa-2x mr-2 theme" ></i>{quote}</p>
          </Card>
          <style jsx>{`
          .iconstar {
            color: gold;
          }
          .theme{
            color: #393939;

          }
          `}
            </style>
        </div>
        );
      });


    return (
      <div>
      <Slider {...settings}>
        {slides} 
      </Slider>
      
      </div>
    );
    
  }
  
}
export default SimpleSlider;