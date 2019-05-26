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
    const joinGroup = "<div class=\"fb-group\" data-href=\"https://www.facebook.com/groups/effectivepublishing/\" data-width=\"280\" data-show-social-context=\"false\" data-show-metadata=\"false\"></div>"
    const {
      contentData: {
        totalCount,  edges 
      }
    } = this.props;
    const {
      paperData: { edges: paperRecords}
    } = this.props;

    // this.props.paperData.map(element => {
    //   console.log("papers from :: " +element.node.acf.image.source_url)
    // });

    //console.log("Hello... "+ paperRecords);
    return (
      <div className="row padding">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h3 className="padding">ACADEMIC TUTORIALS</h3>
            <div className="row mb-4 pb-3">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
              <ModalImage className="pb-4" large={edges[0].node.acf.image.source_url} small={edges[0].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={edges[1].node.acf.image.source_url} small={edges[1].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={edges[2].node.acf.image.source_url} small={edges[2].node.acf.image.source_url}/>
              <CardOverlay data="Complete clients' publications" url=""/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={edges[4].node.acf.image.source_url} small={edges[4].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={edges[5].node.acf.image.source_url} small={edges[5].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={edges[6].node.acf.image.source_url} small={edges[6].node.acf.image.source_url}/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={edges[7].node.acf.image.source_url} small={edges[7].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={edges[8].node.acf.image.source_url} small={edges[8].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={content2} small={content2}/>
              </div>
              
              
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h3 className="padding">CLIENTS’ ACCEPTED PAPERS</h3>
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
              <ModalImage className="pb-4" large={this.props.paperData[0].node.acf.image.source_url} small={this.props.paperData[0].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[1].node.acf.image.source_url} small={this.props.paperData[1].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[2].node.acf.image.source_url} small={this.props.paperData[2].node.acf.image.source_url}/>
              <CardOverlay data="More Thesis and tutorials" url=""/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={this.props.paperData[3].node.acf.image.source_url} small={this.props.paperData[3].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[4].node.acf.image.source_url} small={this.props.paperData[4].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[5].node.acf.image.source_url} small={this.props.paperData[5].node.acf.image.source_url}/>
              <CardOverlay data="More publication tutorials" url=""/>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
              <ModalImage className="pb-4" large={this.props.paperData[6].node.acf.image.source_url} small={this.props.paperData[6].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[7].node.acf.image.source_url} small={this.props.paperData[7].node.acf.image.source_url}/>
              <ModalImage className="pb-4" large={this.props.paperData[8].node.acf.image.source_url} small={this.props.paperData[8].node.acf.image.source_url}/>
              <CardOverlay data="More Research and career tutorials" url=""/>
              </div>
              
            </div>
            <div className="d-flex justify-content-center">
            <div dangerouslySetInnerHTML={{ __html: joinGroup }}  />
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
