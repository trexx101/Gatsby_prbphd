import React from "react";
import Slider from "react-slick";
import { Card, CardText, CardTitle, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Avatar from "../Util/Avatar";

import areas from "../../images/testimonials/ahmed.jpg"; 
import chai from "../../images/testimonials/hamimi.jpg";
import presc from "../../images/testimonials/jeslyn.jpg";
import hmk from "../../images/testimonials/hmk.jpg";
const items = [
    {
      name: 'Jeslyn Wong',
      role: '- Student',
      link: presc,
      quote: 'Thank you Dr Thava for helping me to solve problems in dissertation paper. I have received a good experience from them in terms of delivery. They have consulted on SPSS and edited the whole thesis and i’m glad that my friend recommended them to me. In terms of customer service,they were extremely efficient to reply my questions and i was able to meet my thesis deadline. I would highly recommend them to my friends in future!!'
    },
    {
      name: 'Hmk Nazrul Hakimi',
      role: '- Student',
      link: hmk,
      quote: 'Last time, my friend recommended Dr Thava as a proofreader and editor to ensure the highest possible quality of my work. He did not disappoint!. Now, my manuscript has been accepted to publish in one of the leading journal in road safety study. From the first point of contact, Dr Thava and his team from #ProofreadingbyaUKPhD was professional and showed great commitment to their work. Dr Thava\’s edits and formatting work are impeccable and significantly improved the quality and fluency of my manuscript. I highly recommend him as an editor and proofreader!'
    },
    {
      name: 'Ahmed A. Zaid',
      role: '- Student',
      link: areas,
      quote: 'Thanks a lot, Proofreading by a UK Ph.D. It\'s was really awesome to work with you. Finally, the paper was accepted and published in the 😀👌👌👌Journal of cleaner production (impact factor 5.621)'
    },
    {
      name: 'Hazmimi Hasim',
      role: '- PHD Student',
      link: chai,
      quote: 'I am pleased to announce that my paper with P.M Dr. Che Rosmani Che Hassan and Dr Mahar Diana of University of Malaya has been published in the Safety Science Journal ( IF 3.1, Q1), it is the most prestigious journal in its area. My great gratitude to Dr Thavamaran Kanesan\'s continuous support via the Proofreading by UK PhD. He and his team have remarkably proofread the paper, and supported us throughout the review process. It was an excellent collaboration.'
    }
  ];

class SimpleSlider extends React.Component {


  render() {
    var settings = {
      dots: true,  infinite: true,
      speed: 500,  slidesToShow: 2,
      slidesToScroll: 3
    };
    const quote = (() => {
        return <i className="fas fa-quote-left" ></i>
    });
    const size = 90;

    const slides = items.map((item) => {
        return (
        <div className="px-3">
          <Card body className="text-center padding">
            <Avatar size={size} src={item.link} className="mx-auto" rounded/>
            <Link to="/" ><CardTitle>{item.name}</CardTitle></Link>
            <CardText>{item.role}</CardText>
            <span className="iconstar">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </span>
            
            <p><i className="fas fa-quote-left fa-2x mr-2 theme" ></i>{item.quote}</p>
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