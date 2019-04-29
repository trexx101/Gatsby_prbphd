import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import Team from "../components/Article/Team";
import MiniHero from "../components/Hero/MiniHero";
import Collab from "../components/Article/Collab";
import SimpleSlider from "../components/Slider/SimpleSlider";
import Slido from "../components/Article/Slider";
import {
  Button,
  Container,
  CardHeader,
  CardFooter,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
//import { Col } from "antd";
import { Row, Col, Form, ButtonGroup, CardBody, Card, UncontrolledCollapse } from "reactstrap";
import companyLogo from "../images/logo/imageoflogo.png";
import chiefEditor from "../images/logo/chief.jpg";
//import { Location } from '@reach/router';

class AboutPage extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <div>
              <MiniHero
                scrollToContent={this.scrollToContent}
                backgrounds={backgrounds}
                theme={theme}
              />

              <div className="container container-fluid padding">
              <Row className="pb-3">
                    <Col md="4">
                      <hr className="line-info" />
                      <h1>
                        About Us and Services <span className="text-info">get to know us</span>
                      </h1>
                    </Col>
                  </Row>
                <Row>
                  <Col md={{ size: 9 }}>
                    <div className="mb-4">
                      <p className="mb-1">
                        PROOFREADING BY A UK PHD is registered under Society for Proofreaders and
                        Editors (SFEP), which is a global editorial body based in the UK. In order
                        to maintain the highest possible Quality-of-Delivery (QoD), all of our
                        editors undergo continuous improvement process and closely monitored by our
                        Chief Editor to keep up with the highly challenging publishing environment.
                        Therefore, our group of editors are highly qualified in both segments,
                        namely expertise in their own core areas and possess excellent English
                        command. Combining both segments enabled us to deliver the utmost perfect
                        documents to our clients. We have editors from a wide range of academic
                        fields, who hold Masters/PhD qualifications from leading
                        British/American/New Zealand/Australian and Malaysian Universities. In the
                        case of Law, Medical and Engineering fields, we have proofreaders that are
                        actual practicing Solicitors, Doctors, and Engineers.
                      </p>
                      <p className="mb-4">
                        Thus far, we as a team, have Proofread, Edited, Structured and Paraphrased
                        over 8,000 documents in the past years. The range of documents were, but not
                        limited to:
                      </p>
                    </div>
                  </Col>
                  <Col md={{ size: 3 }}>
                    <img src={companyLogo} alt="quote image" className="quote img-fluid" />
                  </Col>
                </Row>

                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fa fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>PhD/Masters Theses/Proposals, </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fa fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>Q1 to Q4 SCI/SSCI/Scopus Journals</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fa fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>CV, Research Statements, and Teaching Statements, even WRITING</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gap" />
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fas fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>AACSB Documents for Global Business Schools</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fas fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>Research Grants</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-block">
                      <div className="pull-left bounce-in">
                        <i className="fa fa-book fa fa-md" />
                      </div>
                      <div className="media-body fade-up">
                        <p>Business Proposals and Tender Documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container container-fluid padding">
              <Row className="pb-3">
                    <Col md="4">
                      <hr className="line-info" />
                      <h1>
                        Consultancy Services
                      </h1>
                    </Col>
                  </Row>
                <Row>
                  <p>
                    Chief Editor also works closely with subject matter experts (SMEs) from various
                    universities, where SMEs are either Postdocs, Lectures, or Assistant Professors.
                    Through Chief Editor and the aforementioned experts, our firm have provided
                    consultancy services to over 3,800 clients, including but not limited to:
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item disabled" aria-disabled="true">
                      Cras justo odio
                    </li>
                    <li class="list-group-item">Research Consultancy (Social and Pure Science)</li>
                    <li class="list-group-item">
                      Thesis / Proposal Writing Consultancy (Social and Pure Science){" "}
                    </li>
                    <li class="list-group-item">
                      Q1 Paper Writing Consultancy (Social and Pure Science)
                    </li>
                    <li class="list-group-item">
                      Quantitative (SMART PLS, and etc.) and Qualitative (Atlas.ti, Nvivo, and etc.)
                    </li>
                    <li class="list-group-item">Matlab Programming</li>
                    <li class="list-group-item">EViews</li>
                  </ul>
                </Row>

                <Row >
                  <Col md="6">
                    <Card className="py-1 px-1">
                      <h3>Ordering Process</h3>
                      <CardBody>
                        <p>
                          Once an inquiry is placed via our Get Quote tool, our customer service
                          team will first assess your requirements and match it with the best
                          suitable Editor / Consultant. Thereafter, an official quotation would be
                          issued to facilitate Purchase Order or Direct Payment.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="py-1 px-1">
                      <h3>Warranty Process</h3>
                      <CardBody>
                        <p>
                          We are the only Language and Consultancy firm that provides 100% warranty
                          for any documents or consultancy delivered.{" "}
                        </p>
                        <br />
                        <br />
                        <br />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div className="container container-fluid padding">
              <Row className="pb-3">
                    <Col md="4">
                      <hr className="line-info" />
                      <h1>
                        Our Chief Editor <span className="text-info">meet the team</span>
                      </h1>
                    </Col>
                  </Row>
                <Row>
                  <Col md={{ size: 9 }}>
                    <div className="mb-4">
                      <p className="mb-1">
                        Dr Thavamaran completed his Ph.D. degree at the UK in less than 3 years.
                        Thereafter, he solely founded Proofreading By A UK Ph.D., an Academic
                        Consulting Firm that provides services across many verticals. The firm has
                        grown from having a single founder to currently employing over 60
                        Consultants all over the globe, and currently serves Corporates/Universities
                        in over 27 Countries, including UK, Saudi Arabia, Malaysia, Korea,
                        Australia, and many more. In his personal Research Journey, Thavamaran has
                        an exciting publication record and awards, with > 50 publications within 5
                        years, mostly published in SCI/SSCI Quartile 1 journals and Low Acceptance
                        Rate conferences.
                      </p>
                      <p>
                        Most notably, his firm had garnered over 19,000 Academic Followers in his
                        vibrant Facebook page, which completely focuses on Academic & Career
                        Paradigms. Proofreading By A UK Ph.D. currently serves as the official
                        editorial for many Universities, Governmental and Private Organizations,
                        notably MABMS, MARDI, USM, UniMAS, UMK JEB, and AMDHS. Apart from his
                        consultancy journey, he was also with the prestigious Aston Institute of
                        Photonic Technologies, Birmingham as a postdoctoral researcher and worked in
                        a number of European FP7, EPSRC and Horizon Projects. In order to gain
                        further industrial insights, he joined Telekom Malaysia as a Technical
                        Manager, focusing on radio-over-fiber system projects and directly managed
                        24 members of technical staffs. To date, Thavamaran has managed to secure
                        over RM 23.7 Mil (USD 5.4 Mil) worth of Research Grants, and won numerous
                        Best Paper and Researcher-of-the-year awards, namely:
                      </p>
                    </div>
                  </Col>
                  <Col md={{ size: 3 }}>
                    <img src={chiefEditor} alt="quote image" className="quote img-fluid" />
                  </Col>
                </Row>
                <div className="gap" />
              </div>

              <Team />

              <Container>
              <Row className="pb-3">
                    <Col md="4">
                      <hr className="line-info" />
                      <h1>
                        Our services
                      </h1>
                    </Col>
                  </Row>
                <Row className="justify-content-center">
                  <Col lg="12">
                    
                    <Row className="row-grid justify-content-center">
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="tim-icons icon-money-coins" />
                          </div>
                          <h4 className="info-title">Proofreading and Editing</h4>
                          <hr className="line-primary" />
                          <p>Combined services</p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-warning">
                            <i className="tim-icons icon-chart-pie-36" />
                          </div>
                          <h4 className="info-title">Proofreading, Editing and Structuring</h4>
                          <hr className="line-warning" />
                          <p>Combined services</p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <h4 className="info-title">Paraphrasing, Proofreading, and Editing</h4>
                          <hr className="line-success" />
                          <p>Combined services</p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <h4 className="info-title">
                            Paraphrasing, Proofreading, Editing, and Structuring
                          </h4>
                          <hr className="line-success" />
                          <p>Combined services</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>

              <div className="container container-fluid padding ">
                <div className="row">
                  <div className="col">
                    <h1 className=" pb-4">Testimonials</h1>
                    <SimpleSlider />
                  </div>
                </div>
              </div>

              <section className="section section-lg section-coins">
                <img alt="..." className="path" src={require("../assets/img/path3.png")} />
                <Container>
                  <Row className="pb-3">
                    <Col md="4">
                      <hr className="line-info" />
                      <h1>
                        Choose the package <span className="text-info">that fits your needs</span>
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("../assets/img/ripp.png")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Small Document</h4>
                              <span>Below 30 pages</span>
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>
                                <ListGroupItemHeading>Proofreading & Editing</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 18 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Proofreading, Editing and Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 19 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading & Editing
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 35 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading, Editing & Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 40 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Style and Reference Formatting
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 3.5 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>Translation</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 0.30 / word
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Research, Thesis, Quantitative, Qualitative, and Career
                                  Consultations
                                </ListGroupItemHeading>
                                <ListGroupItemText>contact us</ListGroupItemText>
                              </ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button className="btn-simple" color="success">
                            Get plan
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("../assets/img/ripp.png")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Medium Document</h4>
                              <span>Below 60 Pages</span>
                              <hr className="line-success" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>
                                <ListGroupItemHeading>Proofreading & Editing</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 18 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Proofreading, Editing and Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 19 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading & Editing
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 35 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading, Editing & Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 40 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  <b>Style and Reference Formatting</b>
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 3.5 / Page
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>Translation</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 0.30 / word
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Research, Thesis, Quantitative, Qualitative, and Career
                                  Consultations
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button className="btn-simple" color="success">
                            Get plan
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("../assets/img/ripp.png")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Heavy Document</h4>
                              <span>Above 100 Pages</span>
                              <hr className="line-info" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>
                                <ListGroupItemHeading>Proofreading & Editing</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Proofreading, Editing and Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading & Editing
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Paraphrasing, Proofreading, Editing & Structuring
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Style and Reference Formatting
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>Translation</ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                              <ListGroupItem>
                                <ListGroupItemHeading>
                                  Research, Thesis, Quantitative, Qualitative, and Career
                                  Consultations
                                </ListGroupItemHeading>
                                <ListGroupItemText>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us
                                </ListGroupItemText>
                              </ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                          <Button className="btn-simple" color="success">
                            Contact Us
                          </Button>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </section>

              <Seo facebook={facebook} />

              <style jsx>{`
                .hr {
                  margin: 0;
                  border: 0;
                }
                .gap {
                  margin-bottom: 50px;
                }
                .icon.icon-success {
                  color: #00f2c3;
                }
                .quote {
                  max-width: 100%;
                  height: auto;
                }

                .service-block:hover .fa-md {
                  background: transparent;
                  color: #ff5a09;
                  box-shadow: 0 0 0 4px #00b29e;
                }

                .service-block .media-heading {
                  margin-bottom: 10px;
                  font-size: 16px;
                }
                .fa-md {
                  font-size: 36px;
                  height: 68px;
                  width: 68px;
                  line-height: 68px;
                  color: #fff;
                  margin-right: 15px;
                  background-color: #ff5a09;
                  text-align: center;
                  display: block;
                  box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
                  overflow: hidden;
                  -webkit-transition: background 0.3s color 0.3s box-shadow 0.3s;
                  -moz-transition: background 0.3s color 0.3s box-shadow 0.3s;
                  transition: background 0.3s color 0.3s box-shadow 0.3s;
                }
                .fa-lg {
                  font-size: 48px;
                  height: 108px;
                  width: 108px;
                  line-height: 108px;
                  color: #fff;
                  margin: 10px;
                  background-color: rgba(0, 0, 0, 0.4);
                  text-align: center;
                  display: inline-block !important;
                  border-radius: 100%;
                }
                .padding {
                  padding: 80px 0;
                }
              `}</style>
            </div>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query AboutQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
    bgDesktop: imageSharp(id: { regex: "/hero-background/" }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(id: { regex: "/hero-background/" }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(id: { regex: "/hero-background/" }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
