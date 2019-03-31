import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CardOverlay from './CardOverLay';

import content1 from "../../images/content/chapter_1.jpg";
import content2 from "../../images/content/litReview.jpg";
import content3 from "../../images/content/more-512.png";
import content4 from "../../images/content/orgnizing.jpg";
import content5 from "../../images/content/problem_statement.jpg";
import content6 from "../../images/content/writing_dissertation.jpg";

import paper0 from "../../images/papers/Slide2.jpg";
import paper1 from "../../images/papers/Slide3.jpg";
import paper2 from "../../images/papers/Slide4.jpg";
import paper3 from "../../images/papers/Slide7.jpg";
import paper4 from "../../images/papers/Slide35.jpg";
import paper5 from "../../images/papers/Slide37.jpg";
import paper6 from "../../images/papers/Slide40.jpg";


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
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
                <CardOverlay data={content1}></CardOverlay>
                <CardOverlay data={content2}></CardOverlay>
                <CardOverlay data={content3}></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay data={content4}></CardOverlay>
                <CardOverlay data={content5}></CardOverlay>
                <CardOverlay data={content6}></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay data={content2}></CardOverlay>
                <CardOverlay data={content2}></CardOverlay>
                <CardOverlay data={content2}></CardOverlay>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h4>CLIENTS’ ACCEPTED PAPERS</h4>
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
                <CardOverlay data={paper1}></CardOverlay>
                <CardOverlay data={paper2}></CardOverlay>
                <CardOverlay data={paper3}></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay data={paper4}></CardOverlay>
                <CardOverlay data={paper5}></CardOverlay>
                <CardOverlay data={paper6}></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay data={paper2}></CardOverlay>
                <CardOverlay data={paper2}></CardOverlay>
                <CardOverlay data={paper2}></CardOverlay>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
}