import React from "react";
import Slider from "react-slick";
import { Card, CardText, CardTitle, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import Avatar from "../Util/Avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
const items = [
    {
      name: 'Mok Yuky',
      role: '- Student',
      link: 'https://source.unsplash.com/random/80x80',
      quote: 'Thank you Proofreading by a UK PhD! Great services! I would highly recommend because they\'re trustable. They helped to review and edit my whole dissertation, also providing SPSS consultation services for my master dissertation. Thank you!'
    },
    {
      name: 'Hmk Nazrul Hakimi',
      role: '- Joker',
      link: 'https://source.unsplash.com/random/81x81',
      quote: 'Last time, my friend recommended Dr Thava as a proofreader and editor to ensure the highest possible quality of my work. He did not disappoint!. Now, my manuscript has been accepted to publish in one of the leading journal in road safety study. From the first point of contact, Dr Thava and his team from #ProofreadingbyaUKPhD was professional and showed great commitment to their work. Dr Thava\’s edits and formatting work are impeccable and significantly improved the quality and fluency of my manuscript. I highly recommend him as an editor and proofreader!'
    },
    {
      name: 'Saras Andy',
      role: '- Teacher',
      link: 'https://source.unsplash.com/random/82x82',
      quote: 'DR. Thavamaran @ ProofreadingbyPhD service- added an extra layer of professional to my thesis. His work is impeccable, very professional and thoroughly edited my thesis with precise. DR. Thava was able to edit according to my specific needs and even monitored my contents, always never missed deadlines, and flawless in ensuring consistency of style and terminology...'
    },
    {
      name: 'Michelle Chai',
      role: '- Teacher',
      link: 'https://source.unsplash.com/random/82x81',
      quote: 'Dr Thava and the team has demonstrated an extensive proofreading service in a short amount of time. The team has also established an ethical consideration by refunding client who has had written well in the first submission. All in all, I\'d recommend this proofreading service to all postgraduate students seeking to have a more quality work done before submitting the paper for evaluation. Thanks once again!'
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