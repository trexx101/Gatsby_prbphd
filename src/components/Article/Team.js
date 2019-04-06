import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, Container, UncontrolledTooltip, Row, Col, CardHeader, CardBody, Table, Label, FormGroup, Input, FormText } from 'reactstrap';
import classnames from 'classnames';

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
    this.state = {
        tabs: 1
      };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  componentDidMount() {
    
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("profile-page");
  }
  
  render() {
    return (
        <Container className="align-items-center">
        <br/>
        <h2>
            Meet the team
        </h2>
        <br/>
          <br/>
          <br/>
          <br/>
        <Row >
          
          <Col className="ml-auto mr-auto" lg="4" md="6">
            <Card className="card-coin card-plain">
              <CardHeader>
                <img
                  alt="..."
                  className="img-center img-fluid rounded-circle"
                  src={require("../../images/testimonials/ahmed.jpg")}
                />
              </CardHeader>
              <CardBody>
                <Nav
                  className="nav-tabs-primary justify-content-center"
                  tabs
                >
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.tabs === 1
                      })}
                      onClick={e => this.toggleTabs(e, "tabs", 1)}
                      href="#pablo"
                    >
                      description
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.tabs === 2
                      })}
                      onClick={e => this.toggleTabs(e, "tabs", 2)}
                      href="#pablo"
                    >
                      Socials
                    </NavLink>
                  </NavItem>
                  
                </Nav>
                <TabContent
                  className="tab-subcategories"
                  activeTab={"tab" + this.state.tabs}
                >
                  <TabPane tabId="tab1">
                  <p className="profile-description">
              Offices parties lasting outward nothing age few resolve.
              Impression to discretion understood to we interested he
              excellence. Him remarkably use projection collecting. Going
              about eat forty world has round miles.
            </p>
                  </TabPane>
                  <TabPane tabId="tab2">
                    <Row>
                      <Label sm="3">Follow me online</Label>
                      <div className="btn-wrapper profile pt-3">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip639225725"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip639225725">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/creativetim"
                id="tooltip982846143"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip982846143">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-round"
                color="dribbble"
                href="https://dribbble.com/creativetim"
                id="tooltip951161185"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip951161185">
                Follow us
              </UncontrolledTooltip>
            </div>
                    </Row>
                    
                  </TabPane>
                  
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <style jsx>{`
               .profile-page {
                overflow-x: hidden; }
                .page-header {
                  min-height: 550px; }
                  .page-header .container {
                    padding-top: 30vh; }
                  .page-header .path {
                    max-width: 65%;
                    right: 0;
                    top: 100px; }
                .info {
                  padding: 40px 0 0; }
                  .info .description {
                    text-align: left;
                    padding-left: 20px; }
                .profile-title {
                  position: absolute;
                  top: 110px;
                  left: 60px; }
                .profile-description {
                  margin-top: -30px;
                  max-width: 450px;
                  font-size: 0.875rem;
                  line-height: 26px; }
                .profile-container {
                  color: #ffffff; }
                .photo-container {
                  max-width: 400px;
                  overflow: hidden;
                  -webkit-box-shadow: -15px 20px 60px 0px rgba(0, 0, 0, 0.3);
                  -moz-box-shadow: -15px 20px 60px 0px rgba(0, 0, 0, 0.3);
                  box-shadow: -15px 20px 60px 0px rgba(0, 0, 0, 0.3); }
                .title {
                  text-align: center;
                  margin-top: 30px; }
                .description,
                .category {
                  text-align: center; }
                .profile-page h5.description {
                  max-width: 700px;
                  margin: 20px auto 75px; }
                .nav-align-center {
                  margin-top: 30px; }
                .content .social-description {
                  display: inline-block;
                  max-width: 150px;
                  width: 145px;
                  text-align: center;
                  margin: 15px 0 0px; }
                  .content .social-description h2 {
                    margin-bottom: 15px; }
                .collections img {
                  margin-bottom: 30px; }
                .gallery {
                  margin-top: 45px;
                  padding-bottom: 50px; }
                .card-coin .list-group {
                  margin: 0 !important;
                  text-align: left !important;
                  color: rgba(255, 255, 255, 0.5); }
                .card .card-header .profile-title {
                  top: 125px; }
              `}</style>
      </Container>
    );
  }
}