import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CardOverlay from './CardOverLay';


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
            <h4>Content</h4>
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="padding">
            <h4>Papers</h4>
            <div className="row">
              <div className="col-xs-4 col-sm-6 col-md-4 padding">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              <div className="col-xs-4 col-sm-6 col-md-4">
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
                <CardOverlay></CardOverlay>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    );
  }
}