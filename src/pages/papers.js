import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";

import MiniHero from "../components/Hero/MiniHero";
import Seo from "../components/Seo";
import { Button, Container } from "reactstrap";
//import { Col } from "antd";
import { Row, Col, Form, ButtonGroup, Jumbotron } from "reactstrap";

import paper0 from "../images/papers/Slide2.png";
import paper1 from "../images/papers/Slide3.png";
import paper2 from "../images/papers/Slide4.png";
import paper3 from "../images/papers/Slide7.png";
//import paper4 from "../images/papers/Slide35.png";
import paper5 from "../images/papers/Slide37.png";
import paper6 from "../images/papers/Slide40.png";
const book_list = [
  {
    author: "Jeslyn Wong",
    title: "- Student",
    link: paper0
  },
  {
    author: "Hmk Nazrul Hakimi",
    title: " Material and design",
    link: paper1
  },
  {
    author: "Ahmed A. Zaid",
    title: "- Student",
    link: paper2
  },
  {
    author: "Hazmimi Hasim",
    title: "Utilization of natural cellulose fiber in wastewater treatment",
    link: paper3
  }
];

class PapersPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };


  render() {
    const {
      data: {
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

   const books = book_list.map((book) => {
     return (
       <span>
      <div className="book read">
      <div className="cover">
        <img src={book.link}/>
      </div>
      <div className="description">
        <p className="title">
          {book.title}
          <br />
          <span className="author">{book.author}</span>
        </p>
      </div>
    </div>
    <style jsx>{`
    .book {
      display: inline-block;
      width: 230px;
      height: 390px;
      box-shadow: 0 0 20px #aaa;
      margin: 25px;
      padding: 10px 10px 0 10px;
      vertical-align: top;
      transition: height 1s;
    }
    /* star button */
    .book:after {
      font-family: FontAwesome;
      content: "\f006";
      font-size: 35px;
      position: relative;
      left: -0.1cm;
      top: -1.6cm;
      float: right;
    }

    .cover {
      border: 2px solid gray;
      height: 80%;
      overflow: hidden;
    }

    .cover img {
      width: 100%;
    }

    .book p {
      margin-top: 12px;
      font-size: 18px;
    }

    .book .author {
      font-size: 15px;
    }
    @media (max-width: 941px) {
      .container {
        max-width: 700px;
      }
      .book {
        margin: 49px;
      }
    }
    @media (max-width: 730px) {
      .book {
        display: block;
        margin: 0 auto;
        margin-top: 50px;
      }
      .cover {
      }
    }

    
    `}
      </style>
      </span>
     );
   });

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

        <div>
          <Jumbotron className="d-flex flex-column text-center">
            <h1 className="display-3">Top published papers</h1>
            <br />
            <br />

            <p className="lead text-center font-weight-bold text-dark font-h2">
              {" "}
              Utilization of natural cellulose fiber in wastewater treatment
            </p>
            <hr className="my-2 text-center font-weight-bold text-dark" />
            <p className="font-weight-bold text-dark">By Nur Syazwani Abd Rahman, Mohd Firdaus Yahya, Baharin Azahari</p>
            <p className="lead">
              <ButtonGroup size="lg">
                <Button color="primary">Crossmark Publishing</Button>
                <Button color="primary">Chemistry</Button>
              </ButtonGroup>
            </p>
          </Jumbotron>
        </div>

        <div className="container container-fluid padding">
          <div id="large-th">
            <div className="containment">
              <h1> Complete Clients’ Publications</h1>
              <br />
              <div className="choose">
                <a href="#list-th">
                  <i className="fa fa-th-list" aria-hidden="true" />
                </a>
                <a href="#large-th">
                  <i className="fa fa-th-large" aria-hidden="true" />
                </a>
              </div>
              <div id="list-th">
              {books}
                
              </div>
            </div>
          </div>
          <div className="gap" />
        </div>

        <style jsx>{`
          .hr {
            margin: 0;
            border: 0;
          }
          .padding {
            padding: 80px 0;
          }
          .gap {
            margin-bottom: 50px;
          }
          .container {
            margin: 0 auto;
            max-width: 910px;
          }

          .font-h2 {
            font-size: 26px;
          }

          .choose {
            width: 100%;
            height: 40px;
          }
          .fa {
            margin-right: 20px;
            font-size: 30px;
            color: gray;
            float: right;
          }
          /******************************************
          Book stuff
          *******************************************/

          .book {
            display: inline-block;
            width: 230px;
            height: 390px;
            box-shadow: 0 0 20px #aaa;
            margin: 25px;
            padding: 10px 10px 0 10px;
            vertical-align: top;
            transition: height 1s;
          }
          /* star button */
          .book:after {
            font-family: FontAwesome;
            content: "\f006";
            font-size: 35px;
            position: relative;
            left: -0.1cm;
            top: -1.6cm;
            float: right;
          }

          .cover {
            border: 2px solid gray;
            height: 80%;
            overflow: hidden;
          }

          .cover img {
            width: 100%;
          }

          .book p {
            margin-top: 12px;
            font-size: 18px;
          }

          .book .author {
            font-size: 15px;
          }
          @media (max-width: 941px) {
            .container {
              max-width: 700px;
            }
            .book {
              margin: 49px;
            }
          }
          @media (max-width: 730px) {
            .book {
              display: block;
              margin: 0 auto;
              margin-top: 50px;
            }
            .cover {
            }
          }

          /*********************************
          other
          **********************************/

          h1 {
            color: gray;
            text-align: center;
            font-size: 50px;
            margin-bottom: -3px;
          }

          /**********************************
          display change
          ***********************************/
          /*book height smaller, cover opacity, move text onto cover and star too
          animate it */
          #list-th:target .book {
            height: 100px;
            width: 250px;
            padding: 10px;
            margin: 25px auto 25px auto;
          }

          #list-th:target .cover {
            width: 246px;
          }

          #list-th:target img {
            opacity: 0.1;
          }

          #list-th:target p {
            margin-top: -62px;
            margin-left: 20px;
          }
          /* remove button? */
          #large-th:target .book {
            height: 390px;
          }

          /***********************************
          star animation
          ***********************************/
          /***********************************
          zoom on click
          ***********************************/
        `}</style>
        </div>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
}

export default PapersPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query PaperQuery {
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