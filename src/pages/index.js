import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Hero from "../components/Hero";
import Seo from "../components/Seo";
import WorkTable from "../components/Article/WorkTable";
import Collab from "../components/Article/Collab";
import SimpleSlider from "../components/Slider/SimpleSlider";
import Slido from "../components/Article/Slider";
import { Button, Container } from 'reactstrap';
//import { Col } from "antd";
import { Row, Col, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import avatar6 from "../images/slider/james.png";

class IndexPage extends React.Component {
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
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <div className="gap"></div>
        <div className="gap"></div>

        <div className="container container-fluid padding my-4">
          <div className="row">
            <div className="col">
              <h1 className="padding my-4">Testimonials</h1>
              <SimpleSlider></SimpleSlider>
            </div>
          </div>
        </div>

        <div className="gap"></div>
        <hr className="my-4"/>
        <div className="gap"></div>
        
        <div className="container container-fluid padding my-4">
          <h1 className="padding my-4">Get Quotation</h1>
          <Row>
            <Col md={{ size: 6 }}>
            <div className="mb-4">
              <h3 className="mb-4">If you would like to hear more ...</h3>
              <p className="mb-4">We have a simple and friendly business model you can try out this service by uploading your document and we will process your doucment and have it sent to our panel of professional proof readers</p>
              
            </div>
            <Form>
                <ButtonGroup className="mr-3 mb-3 ">
                  <Button color="primary">Upload manuscript</Button>
                  <Button color="primary">Get consultation</Button>
                </ButtonGroup>
            </Form>
            </Col>
            <Col md={{ size: 4 }}>
            <img src={avatar6} alt="quote image"className="quote img-fluid" />
            </Col>
          </Row>
        </div>
        
        <div className="gap"></div>
        <hr className="my-4" />
        <div className="gap"></div>

        <div className="container container-fluid padding my-4">
          <h1 className=" mb-4">Our Work</h1>
          <WorkTable/>
        </div>

        <div className="gap"></div>
        <hr className="my-4" />
        <div className="gap"></div>

        <div className="container container-fluid padding my-4">
          <h1 className=" mb-4">Our Workshop</h1>
          <Slido/>
        </div>

        <div className="gap"></div>
        <hr className="my-4" />
        <div className="gap"></div>

        <div className="container container-fluid padding my-4">
          <h1 className=" mb-4">Our Trusted Publishers, Journals and Institutions</h1>
          <Collab/>
        </div>

        <Seo facebook={facebook} />

        <style jsx>{`
          .hr {
            margin: 0;
            border: 0;
          }
          .gap{
            margin-bottom:50px;
          }
          .quote {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query IndexQuery {
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
