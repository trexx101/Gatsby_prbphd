import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import { Link } from "react-router-dom";
import MicroHero from "../components/Hero/MicroHero";
import Slido from "../components/Article/Slider";
import SimpleSlider from "../components/Slider/SimpleSlider";
import Collab from "../components/Article/Collab";
import {
  Container, Button, CardTitle, CardText, CardImg
} from "reactstrap";
import { Row, Col, Form, ButtonGroup, CardBody, Card, UncontrolledCollapse } from "reactstrap";


class WorkshopPage extends React.Component {
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
           <MicroHero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>
        <div className="container container-fluid padding">
          <Row className="pb-3">
            <Col md="4">
              <hr className="line-info" />
              <h1>Upcoming Events</h1>
            </Col>
          </Row>
          <Slido />
          <div className="d-flex justify-content-center mt-4">
            <p>Interesting in one one of our Workshops?</p>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Button>Find out more</Button>
          </div>
        </div>

        <div className="container container-fluid padding">
          <Row className="pb-3">
            <Col md="4">
              <hr className="line-info" />
              <h1>What we offer</h1>
            </Col>
          </Row>
          <img alt="..." className="path2" src={require("../assets/img/charts.jpg")} />
          
          
        </div> 
        <div className="container container-fluid padding ">
            <div className="row">
              <div className="col">
                <Row className="pb-3">
                  <Col md="4">
                    <hr className="line-info" />
                    <h1>Testimonials</h1>
                  </Col>
                </Row>

                <SimpleSlider entries={records} />
                
              </div>
            </div>
          </div>
          <div className="container container-fluid padding">
          <Row className="pb-3">
            <Col md="6">
              <hr className="line-info" />
              <h1>Our Official and Trusted Institutions and Publishers</h1>
            </Col>
          </Row>
          <Collab />
          <br/>
        </div>   
      </React.Fragment>
    );
  }
}

WorkshopPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default WorkshopPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query WorkshopQuery {
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
