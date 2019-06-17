import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import { Link } from "react-router-dom";
import MiniHero from "../components/Hero/MiniHero";
import {
  Container, Button, CardTitle, CardText, CardImg
} from "reactstrap";
//import { Col } from "antd";
import { Row, Col, Form, ButtonGroup, CardBody, Card, UncontrolledCollapse } from "reactstrap";
import companyLogo from "../images/logo/imageoflogo.png";
import chiefEditor from "../images/logo/chief.jpg";
//import { Location } from '@reach/router';

class ContentPage extends React.Component {
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
        testimonials: { edges: records },
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
                <Row>
                    <Col md="8" sm="12">
                      <div  className="card height500">
                      <Link to="">
                      <img alt="..." className="path2" src={require("../assets/img/corprate.jpg")} />
                      <div className="front" >
                          <p>Plan S: The nuts and bolts</p>
                        </div>
                      </Link>
                      </div>  
                    
                    </Col>

                    <Col md="4" sm="12">
                    <div className="height150 card">
                      <Link to="">
                      <img alt="..." className="path2" src={require("../assets/img/aa.jpg")} />
                      <div className="front" >
                          <p>Article: 10 survival strategy for postDoc life</p>
                        </div>
                      </Link>
                    </div>

                    <div className="height150 card">
                      <Link to="">
                      <img alt="..." className="path2" src={require("../assets/img/aa.jpg")} />
                      <div className="front" >
                          <p>Reasearcher Story: My first ever conference talk!</p>
                        </div>
                      </Link>
                    </div>

                    <div className="height150 card">
                      <Link to="">
                      <img alt="..." className="path2" src={require("../assets/img/aa.jpg")} />
                      <div className="front" >
                          <p>Course: How to write for a global audience.</p>
                        </div>
                      </Link>
                    </div>
                        
                    </Col>
                </Row>
            </div>

            <div className="container container-fluid padding">
            <Row>
                    <Col md="6">
                    <hr className="line-info" />
                      <h1>
                      Thesis Writing Tutorials
 
                      </h1>

                      <Row className="pt-4">
                        <Col md="5">
                          <Card>
                            <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card Title</CardTitle>
                              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                          </Card>
                        
                        </Col>
                        <Col md="5">
                        <Card>
                          <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" /> 
                          <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          </CardBody>
                          </Card>
                        </Col>
                        <Col md="2">
                          <Link to="">
                            <img alt="..." className="arrow" src={require("../images/content/moreicon.png")} />
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="6">
                    <hr className="line-info" />
                      <h1>
                      Grant Writing Tutorials
                      </h1>
                      <Row className="pt-4">
                        <Col md="5">
                          <Card>
                            <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card Title</CardTitle>
                              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                          </Card>
                        
                        </Col>
                        <Col md="5">
                        <Card>
                          <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" /> 
                          <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          </CardBody>
                          </Card>
                        </Col>
                        <Col md="2">
                          <Link to="">
                            <img alt="..." className="arrow" src={require("../images/content/moreicon.png")} />
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                </Row>
            </div>

            <div className="container container-fluid padding">
            <Row>
                    <Col md="6">
                    <hr className="line-info" />
                      <h1>
                      Journal Writing Tutorials
                      </h1>
                      <Row className="pt-4">
                        <Col md="5">
                          <Card>
                            <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card Title</CardTitle>
                              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                          </Card>
                        
                        </Col>
                        <Col md="5">
                        <Card>
                          <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" /> 
                          <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          </CardBody>
                          </Card>
                        </Col>
                        <Col md="2">
                          <Link to="">
                            <img alt="..." className="arrow" src={require("../images/content/moreicon.png")} />
                          </Link>
                        </Col>
                      </Row>

                    </Col>
                    <Col md="6">
                    <hr className="line-info" />
                      <h1>
                      Mixed Tutorials
 
                      </h1>
                      <Row className="pt-4">
                        <Col md="5">
                          <Card>
                            <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card Title</CardTitle>
                              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            </CardBody>
                          </Card>
                        
                        </Col>
                        <Col md="5">
                        <Card>
                          <CardImg top width="100%" src="https://placekitten.com/640/360" alt="Card image cap" /> 
                          <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                          </CardBody>
                          </Card>
                        </Col>
                        <Col md="2">
                          <Link to="">
                            <img alt="..." className="arrow" src={require("../images/content/moreicon.png")} />
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                </Row>
            </div>
              <style jsx>{`
                .hr {
                  margin: 0;
                  border: 0;
                }

                .path2 {
                  position: absolute; 
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                .arrow {
                  position: absolute; 
                  width: 60%;
                  height: 60%;
                  object-fit: cover;
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
                .height500{
                  height: 500px;
                }
                .height150{
                  height: 150px;
                }
                .questioncard {
                  height: 150px;
                  display: flex;
                  border-radius: 6px;
                  background-position: center;
                  background-size: cover;
                  text-align: center;
                  justify-content: center;
                  align-items: center;
                  position: absolute;
                }

                .card {
                  color: inherit;
                  cursor: pointer;
                  width: 100%;
                  min-width: calc(33% - 2rem);
                  margin: 1rem;
                  position: relative;
                  padding: 5px;
                }

                .front,
                      .back {
                        display: flex;
                        border-radius: 6px;
                        background-position: center;
                        background-size: cover;
                        text-align: center;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        width: 100%;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                        transform-style: preserve-3d;
                        transition: ease-in-out 600ms;
                        &:before {
                          position: absolute;
                          display: block;
                          content: '';
                          top: 0;
                          left: 0;
                          right: 0;
                          bottom: 0;
                          opacity: .25;
                          z-index: -1;
                        }
                        
                      }
                      .front {
                        background-size: cover;
                        padding: 2rem;
                        font-size: 1.618rem;
                        font-weight: 600;
                        overflow: hidden;
                        font-family: Poppins, sans-serif;
                      }
 
              `}</style>
            </div>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

ContentPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContentPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query ContentQuery {
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
      testimonials: allWordpressWpTestimonial{
        edges {
            node {
              acf{
                name
                role
                stars
                quote
                pictureLink {
                  source_url
                }
                
              }
              
            }
          }   
      }
  }
`;

//hero-background
