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
import { Button, Container } from "reactstrap";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  CardBody,
  Card,
  UncontrolledCollapse
} from "reactstrap";
import avatar6 from "../images/slider/james.png";
import background from "../images/jpg/collage.jpg";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {

    const {
      data: {
        contents: { totalCount,  edges },
        testimonials: { edges: records },
        papers: { title,  edges: paperEntries },
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
    //console.log("Hello... "+ totalCount);
    // paperEntries.forEach(element => {
    //   console.log(" ==> "+element.node.acf.image.source_url)
    // });

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    const joinGroup = "<div class=\"fb-group\" data-href=\"https://www.facebook.com/groups/effectivepublishing/\" data-width=\"280\" data-show-social-context=\"false\" data-show-metadata=\"false\"></div>"
    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <div className="jumbotron awards mb-0">
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <span className="goldmetal">
                <i className="fas fa-award fa-4x" />
              </span>
              <h5 className="text-white">Corning outstanding paper award california</h5>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <span className="goldmetal">
                <i className="fas fa-award fa-4x" />
              </span>
              <h5 className="text-white">Outstanding paper award california</h5>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
              <span className="goldmetal">
                <i className="fas fa-award fa-4x" />
              </span>
              <h5 className="text-white">IEEE Professional award, Macau</h5>
              <p />
            </div>
          </div>
        </div>
        <div className="backgrounder">
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
            <div className="row">
              <div className="col">
                <div className="d-flex  justify-content-center mt-4">
                  <Button href="https://bit.ly/ProofReviews">Read more testimonials</Button>
                  
                  </div>
                  <div className="d-flex  justify-content-center mt-4">
                  <div dangerouslySetInnerHTML={{ __html: joinGroup }}  />
                  
                  </div>
                <div className="gap" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="container container-fluid padding">
          <Row className="pb-3">
            <Col md="4">
              <hr className="line-info" />
              <h1>Get Quotation</h1>
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 6 }}>
              <div className="mb-4">
                <h3 className="mb-4">If you would like to hear more ...</h3>
                <p className="mb-4">
                  We have a simple and friendly business model you can try out this service by
                  uploading your document and we will process your doucment and have it sent to our
                  panel of professional proof readers
                </p>
              </div>
              <Form>
                <ButtonGroup className="mr-3 mb-3 ">
                  <Button color="primary">Upload manuscript</Button>
                </ButtonGroup>
                <div>
                  <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
                    More services
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        <Row>
                          <Button className="my-1 mx-1">Research and consultation</Button>
                          <Button className="my-1 mx-1">Thesis consultation</Button>
                          <Button className="my-1 mx-1">SMART PLS / SPSS / AMOS</Button>
                          <Button className="my-1 mx-1">Atlas.Ti / Nvivo</Button>{" "}
                          <Button className="my-1 mx-1">CV / RESEARCH STATEMENT</Button>
                        </Row>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </Form>
            </Col>
            <Col md={{ size: 6 }}>
              <img src={avatar6} alt="quote image" className="quote img-fluid" />
            </Col>
          </Row>
        </div>

        <div className="container container-fluid padding">
          <Row className="pb-3">
            <Col md="4">
              <hr className="line-info" />
              <h1>Our Work</h1>
            </Col>
          </Row>
          <WorkTable contentData={this.props.data.contents} paperData={paperEntries} />
        </div>

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
            <Button>Find out more.</Button>
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
        </div>

        <Seo facebook={facebook} />

        <style jsx>{`
          .hr {
            margin: 0;
            border: 0;
          }
          .gap {
            margin-bottom: 50px;
          }
          .quote {
            max-width: 100%;
            height: auto;
          }
          .awards {
            background-color: #393939;
          }
          .goldmetal {
            color: #ffa500;
          }
          .backgrounder {
            background-image: url(${background});
            background-repeat: no-repeat;
            background-position: right top;
            background-size: inherit;
          }
          .padding {
            padding: 80px 0;
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
    contents: allWordpressWpContent{
      totalCount,
      edges {
        node {
          id,
          acf{
            title
            image {
              source_url
            }
          }
        }
      }
    }

    papers: allWordpressWpPaper{
      edges {
          node {
            
            acf{
              title
              image {
                source_url
              }
              
            }
            
          }
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
