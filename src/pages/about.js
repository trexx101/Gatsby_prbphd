import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import Team from "../components/Article/Team";
import Collab from "../components/Article/Collab";
import SimpleSlider from "../components/Slider/SimpleSlider";
import Slido from "../components/Article/Slider";
import { Button, Container } from "reactstrap";
//import { Col } from "antd";
import { Row, Col, Form, ButtonGroup, CardBody, Card, UncontrolledCollapse } from "reactstrap";
import companyLogo from "../images/logo/imageoflogo.png";
import chiefEditor from "../images/logo/chief.jpg";

class AboutPage extends React.Component {
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
        <div className="gap" />
        <hr className="my-4" />
        <div className="gap" />
        <br/>

        <div className="container container-fluid padding my-4">
          <h1 className="padding my-4">About Us and Services</h1>
          <Row>
            <Col md={{ size: 9 }}>
              <div className="mb-4">
                <p className="mb-1">
                  PROOFREADING BY A UK PHD is registered under Society for Proofreaders and Editors
                  (SFEP), which is a global editorial body based in the UK. In order to maintain the
                  highest possible Quality-of-Delivery (QoD), all of our editors undergo continuous
                  improvement process and closely monitored by our Chief Editor to keep up with the
                  highly challenging publishing environment. Therefore, our group of editors are
                  highly qualified in both segments, namely expertise in their own core areas and
                  possess excellent English command. Combining both segments enabled us to deliver
                  the utmost perfect documents to our clients. We have editors from a wide range of
                  academic fields, who hold Masters/PhD qualifications from leading
                  British/American/New Zealand/Australian and Malaysian Universities. In the case of
                  Law, Medical and Engineering fields, we have proofreaders that are actual
                  practicing Solicitors, Doctors, and Engineers.
                </p>
                <p className="mb-4">
                  Thus far, we as a team, have Proofread, Edited, Structured and Paraphrased over
                  8,000 documents in the past years. The range of documents were, but not limited
                  to:
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

        <div className="gap" />
        <hr className="my-4" />
        <div className="gap" />

        <div className="container container-fluid padding my-4">
          <h3>Consultancy services</h3>
          <div className="gap" />
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
          <div className="gap" />
          <Row>
            <Col md="6">
              <Card className="py-1 px-1">
                <h3>Ordering Process</h3>
                <CardBody>
                  <p>
                    Once an inquiry is placed via our Get Quote tool, our customer service team will
                    first assess your requirements and match it with the best suitable Editor /
                    Consultant. Thereafter, an official quotation would be issued to facilitate
                    Purchase Order or Direct Payment.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="py-1 px-1">
                <h3>Warranty Process</h3>
                <CardBody>
                  <p>
                    We are the only Language and Consultancy firm that provides 100% warranty for
                    any documents or consultancy delivered.{" "}
                  </p>
                  <br />
                  <br />
                  <br />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

        <div className="container container-fluid padding my-4">
          <h3>Our chief Editor</h3>
          <div className="gap" />
          <Row>
            <Col md={{ size: 9 }}>
              <div className="mb-4">
                <p className="mb-1">
                  Dr Thavamaran completed his Ph.D. degree at the UK in less than 3 years.
                  Thereafter, he solely founded Proofreading By A UK Ph.D., an Academic Consulting
                  Firm that provides services across many verticals. The firm has grown from having
                  a single founder to currently employing over 60 Consultants all over the globe,
                  and currently serves Corporates/Universities in over 27 Countries, including UK,
                  Saudi Arabia, Malaysia, Korea, Australia, and many more. In his personal Research
                  Journey, Thavamaran has an exciting publication record and awards, with > 50
                  publications within 5 years, mostly published in SCI/SSCI Quartile 1 journals and
                  Low Acceptance Rate conferences.
                </p>
                <p>
                  Most notably, his firm had garnered over 19,000 Academic Followers in his vibrant
                  Facebook page, which completely focuses on Academic & Career Paradigms.
                  Proofreading By A UK Ph.D. currently serves as the official editorial for many
                  Universities, Governmental and Private Organizations, notably MABMS, MARDI, USM,
                  UniMAS, UMK JEB, and AMDHS. Apart from his consultancy journey, he was also with
                  the prestigious Aston Institute of Photonic Technologies, Birmingham as a
                  postdoctoral researcher and worked in a number of European FP7, EPSRC and Horizon
                  Projects. In order to gain further industrial insights, he joined Telekom Malaysia
                  as a Technical Manager, focusing on radio-over-fiber system projects and directly
                  managed 24 members of technical staffs. To date, Thavamaran has managed to secure
                  over RM 23.7 Mil (USD 5.4 Mil) worth of Research Grants, and won numerous Best
                  Paper and Researcher-of-the-year awards, namely:
                </p>
              </div>
            </Col>
            <Col md={{ size: 3 }}>
              <img src={chiefEditor} alt="quote image" className="quote img-fluid" />
            </Col>
          </Row>
          <div className="gap" />
        </div>

        <Team></Team>

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
        `}</style>
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
