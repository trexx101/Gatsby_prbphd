import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { SocialIcon } from 'react-social-icons';


import {FacebookProvider, Page  }  from 'react-facebook';

import { ScreenWidthContext, FontLoadedContext } from "../../layouts";
import config from "../../../content/meta/config";
import Menu from "../Menu";

import avatar from "../../images/png/prbphd_small_logo.png";

class Header extends React.Component {
 
  state = {
    fixed: false
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";
    const aboutpage = this.props.path === "/about/" ? "about" : "";
    const paperpage = this.props.path === "/papers/" ? "about" : "";

    return `${fixed} ${homepage} ${aboutpage} ${paperpage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
        
        
          <div className={`bottomarea ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
              <img src={avatar} alt={config.siteTitle} />
            </div>
            <div className="type">
              <h1>{config.headerTitle}</h1>
              <h2>{config.headerSubTitle}</h2>
            </div>
          </Link>
          <FontLoadedContext.Consumer>
            {loaded => (
              <ScreenWidthContext.Consumer>
                {width => (
                  <Menu
                    path={path}
                    fixed={fixed}
                    screenWidth={width}
                    fontLoaded={loaded}
                    pages={pages}
                    theme={theme}
                  />
                )}
              </ScreenWidthContext.Consumer>
            )}
          </FontLoadedContext.Consumer>
          
          </div>

          <div className={`toparea ${this.getHeaderSize()}`}>
        <Link to="/" className="biglogoType">
            <div className="biglogo">
              <img src={avatar} alt={config.siteTitle} />
            </div>
            <div className="type">
              <h1>{config.headerTitle}</h1>
              <h2>{config.headerSubTitle}</h2>
            </div>
          </Link>
        </div>
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            background-color: ${theme.color.neutral.white};
            display: flex;
            position: absolute;
            flex-direction: column-reverse !important;
            width: 100%;
            max-height: initial;
            overflow-y: initial;

            .toparea{
              height: ${theme.header.height.default};
              border: 1px solid rgba(255,255,255,0.302);
              border-left: 0 !important;
              border-right: 0 !important;
              align-content: center;
              top: 0;
              width: 100%;
              margin-top: 0 !important;
              padding-top: 0;
              padding-right: 85px;
              padding-left: 85px;
            }

            .bottomarea{
              height: ${theme.header.height.default};
              align-items: center;
            justify-content: center;
            width: 100%;
            display: flex;
            }

            :global(a.logoType) {
              margin-top: 3px;
              align-items: center;
              display: flex;
              flex-direction: "column";
              color: ${theme.text.color.primary};

              .logo {
                flex-shrink: 0;
              }
            }
            :global(a.biglogoType) {
              align-items: center;
              display: flex;
              margin-top: 3px;
              color: ${theme.text.color.primary};

              .biglogo {
              }
            }

            &.homepage {
              position: absolute;
              background-color: transparent;
              height: 140px;
            }
            &.about {
              position: absolute;
              background-color: transparent;
              height: 140px;
            }
          }

          h1 {
            font-size: ${theme.font.size.m};
            font-weight: ${theme.font.weight.standard};
            margin: ${theme.space.stack.xs};
          }

          h2 {
            font-weight: ${theme.font.weight.standard};
            font-size: ${theme.font.size.xxs};
            letter-spacing: 0;
            margin: 0;
          }

          .logo {
            display: inline-block;
            height: 70px;
            margin: ${theme.space.inline.default};
            overflow: hidden;
            width: 70px;
            transition: all 0.5s;

            .homepage & {
              height: 70px;
              width: 70px;
            }

            .about & {
              height: 70px;
              width: 70px;
            }

            img {
              width: 100%;
            }
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
          }

          @from-width tablet {
            .header {
              z-index: 10;
              
              &.homepage:not(.fixed) {
                :global(a.logoType){
                  display:none;
                }
                :global(a.logoType), h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }

              &.about:not(.fixed) {
                :global(a.logoType){
                  display:none;
                }
                :global(a.logoType), h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }

              &.homepage {
                height: 140px;
              }
            }
          }

          @below desktop {
            .header.homepage {
              .logo {
                border: none;
              }

              :global(a.logoType),
              h1 {
                color: ${theme.color.neutral.white};
              }
              h2 {
                color: ${theme.color.neutral.gray.d};
              }
            }

            .header.about {
              .logo {
                border: none;
              }

              :global(a.logoType),
              h1 {
                color: ${theme.color.neutral.white};
              }
              h2 {
                color: ${theme.color.neutral.gray.d};
              }
            }
          }

          @from-width desktop {
            .header {
              background-color: ${theme.color.neutral.white};
              display: flex;
              position: relative;
              transition: padding 0.5s;
              max-height: initial;
              overflow-y: initial;

              .toparea{
                display: flex;
                border-left: 0 !important;
                border-right: 0 !important;
                align-items: center;
                flex-direction: row;
                justify-content: center;
                top: 0;
                width: 100%;
                padding-top: 1em;
              }
  
              .bottomarea{
                height: ${theme.header.height.default};
                align-items: center;
              justify-content: space-between;
              width: 100%;
              }

              &.fixed {
                height: ${theme.header.height.fixed};
                background-color: ${theme.color.neutral.white};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;

                h1 {
                  margin: ${theme.space.stack.xxs};
                }

                h2 {
                  display: none;
                }
              }

              &.homepage:not(.fixed) {
                :global(a.logoType){
                  display:none;
                }
                :global(a.logoType), h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }

              &.about:not(.fixed) {
                :global(a.logoType){
                  display:none;
                }
                :global(a.logoType), h1 {
                  color: ${theme.color.neutral.white};
                }
                h2 {
                  color: ${theme.color.neutral.gray.d};
                }
              }
            }

            .header :global(a.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }

            .logo {
              margin: ${theme.space.inline.default};

              .fixed & {
                height: 48px;
                width: 48px;
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            h2 {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }

            @keyframes h2Entry {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
