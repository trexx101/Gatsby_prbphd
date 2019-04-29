import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CardOverlay from './CardOverLay';
import ModalImage from 'react-modal-image';

import content1 from "../../images/content/chapter_1.jpg";
import content2 from "../../images/content/litReview.jpg";
import content3 from "../../images/content/more-512.png";
import content4 from "../../images/content/orgnizing.jpg";
import content5 from "../../images/content/problem_statement.jpg";
import content6 from "../../images/content/writing_dissertation.jpg";

import paper0 from "../../images/papers/Slide2.png";
import paper1 from "../../images/papers/Slide3.png";
import paper2 from "../../images/papers/Slide4.png";
import paper3 from "../../images/papers/Slide7.png";
//import paper4 from "../../images/papers/Slide35.png";
import paper5 from "../../images/papers/Slide37.png";
import paper6 from "../../images/papers/Slide40.png";


export default class WorkTable extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    //todo, pls remove this function empty the state
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="row padding">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h4>ACADEMIC TUTORIALS</h4>
            <div className="row mb-4 pb-3">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
              <ModalImage className="pb-4" large={content1} small={content1}/>
              <ModalImage className="pb-4" large={content2} small={content2}/>
              <ModalImage className="pb-4" large={content3} small={content3}/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={content4} small={content4}/>
              <ModalImage className="pb-4" large={content5} small={content5}/>
              <ModalImage className="pb-4" large={content6} small={content6}/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={content2} small={content2}/>
              <ModalImage className="pb-4" large={content2} small={content2}/>
              <ModalImage className="pb-4" large={content2} small={content2}/>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h4>CLIENTS’ ACCEPTED PAPERS</h4>
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
              <ModalImage className="pb-4" large={paper0} small={paper0}/>
              <ModalImage className="pb-4" large={paper1} small={paper1}/>
              <ModalImage className="pb-4" large={paper2} small={paper2}/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={paper3} small={paper3}/>
              <ModalImage className="pb-4" large={paper5} small={paper5}/>
              <ModalImage className="pb-4" large={paper6} small={paper6}/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={paper6} small={paper6}/>
              <ModalImage className="pb-4" large={paper6} small={paper6}/>
              <ModalImage className="pb-4" large={paper6} small={paper6}/>
              </div>
              
            </div>

          </div>
        </div>
        <style jsx>{`
      CardOverlay{
        padding-bottom: 5px;
      }
      .padding{
        padding-bottom:20px;
      }
      `}
      
      </style>
      </div>
      
    );
  }
}