import "typeface-open-sans";
import FontFaceObserver from "fontfaceobserver";
import PropTypes from "prop-types";
import React from "react";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer/";
import Header from "../components/Header";
import { SocialIcon } from 'react-social-icons';
import {FacebookProvider, Page  }  from 'react-facebook';

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/theme.yaml";
import "./layout.css";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    if (typeof window !== `undefined`) {
      this.loadFont("font400", "Open Sans", 400);
      this.loadFont("font600", "Open Sans", 600);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    const { children, data } = this.props;
    const {
      footnote: { html: footnoteHTML },
      pages: { edges: pages }
    } = data;

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <FontLoadedContext.Provider value={this.state.font400loaded}>
          <ScreenWidthContext.Provider value={this.state.screenWidth}>
            <React.Fragment>
              <Header path={this.props.location.pathname} pages={pages} theme={this.state.theme} />

              <main>{children()}</main>
              <Footer html={footnoteHTML} theme={this.state.theme} />
              <div className="sticky-container">
              <ul className="sticky">
                <li>
                <div className="icon-so">
                <SocialIcon url="https://www.twitter.com/proofreadingbyPhD/"  style={{ height: 32, width: 32 }} bgColor="#ff5a01" />
                </div>
                    <p><a href="https://www.twitter.com/proofreadingbyPhD/" target="_blank"><b>Follow Us on Twitter</b></a></p>
                </li>
                <li>
                <div className="icon-so">
                <SocialIcon url="https://www.instagram.com/proofreadingbyPhD/"  style={{ height: 32, width: 32 }} bgColor="#ff5a01" network="instagram" />
                </div>
                    <p><a href="https://www.instagram.com/proofreadingbyPhD/" target="_blank"><b>Follow Us on Twitter</b></a></p>
                </li>
                <li>
                <div className="icon-so">
                <SocialIcon url="https://www.whatsapp.com/proofreadingbyPhD/"  style={{ height: 32, width: 32 }} bgColor="#ff5a01" network="whatsapp" />
                </div>
                    <p><a href="https://www.whatsapp.com/proofreadingbyPhD" target="_blank"><b>Call +011 - 254 2556</b></a></p>
                </li>
                <li className="heavyFB">
                  <div className="icon-so">
                  <SocialIcon url="https://www.facebook.com/proofreadingbyPhD/"  style={{ height: 32, width: 32 }} bgColor="#ff5a01" />
                  </div>
                  <FacebookProvider appId="240220023355857">
                    <Page href="https://www.facebook.com/pg/proofreadingbyPhD" width="350" height="150"/>
                  </FacebookProvider>
                </li>
              </ul>
                  
              </div>

              {/* --- STYLES --- */}
              <style jsx>{`
                main {
                  min-height: 80vh;
                }
              `}</style>
              <style jsx global>{`
                html {
                  box-sizing: border-box;
                }
                *,
                *:after,
                *:before {
                  box-sizing: inherit;
                  margin: 0;
                  padding: 0;
                }
                body {
                  font-family: ${this.state.font400loaded
                    ? "'Open Sans', sans-serif;"
                    : "Arial, sans-serif;"};
                }
                h1,
                h2,
                h3 {
                  font-weight: ${this.state.font600loaded ? 600 : 400};
                  line-height: 1.1;
                  letter-spacing: -0.03em;
                  margin: 0;
                }
                h1 {
                  letter-spacing: -0.04em;
                }
                p {
                  margin: 0;
                }
                strong {
                  font-weight: ${this.state.font600loaded ? 600 : 400};
                }
                a {
                  text-decoration: none;
                  color: #666;
                }
                main {
                  width: auto;
                  display: block;
                }

                .sticky-container{
                  padding:0px;
                  margin:0px;
                  position:fixed;
                  right:-150px;
                  top:230px;
                  width:210px;
                  z-index: 1100;
              }
              .sticky li{
                display: flex;
                  list-style-type:none;
                  background-color:#fff;
                  color:#efefef;
                  height:43px;
                  padding:0px;
                  margin:0px 0px 1px 0px;
                  -webkit-transition:all 0.25s ease-in-out;
                  -moz-transition:all 0.25s ease-in-out;
                  -o-transition:all 0.25s ease-in-out;
                  transition:all 0.25s ease-in-out;
                  cursor:pointer;
              }
              .sticky .heavyFB:hover{
                margin-left:-265px;
            }
              .sticky li:hover{
                  margin-left:-110px;
              }
              
              .icon-so{
                  float:left;
                  margin:5px 4px;
                  margin-right:5px;
              }
              .sticky li p{
                  padding-top:5px;
                  margin:0px;
                  line-height:16px;
                  font-size:11px;
              }
              .sticky li p a{
                  text-decoration:none;
                  color:#2C3539;
              }
              .sticky li p a:hover{
                  text-decoration:underline;
              }

              `}</style>
            </React.Fragment>
          </ScreenWidthContext.Provider>
        </FontLoadedContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(id: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
