import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import { Col, Table, Button } from 'reactstrap';
import styled from 'styled-components'

import FaArrowDown from "react-icons/lib/fa/arrow-down";
import {FacebookProvider, Page  }  from 'react-facebook';
import HeroBanner from "../../images/jpg/Banner.jpg";
import banner2 from "../../images/jpg/book-pages.jpg";
import areas from "../../images/testimonials/ahmed.jpg";
const fbGroup = '<div class="fb-group" data-href="https://www.facebook.com/proofreadingbyPhD/" data-width="280" data-show-social-context="true" data-show-metadata="false"></div>';
const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
`
const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <HeroContainer style={{ backgroundImage: `url("${HeroBanner}")` }}>
      <div className="href">
      <div className="row">
        <div className="col-lg-6 col-md-7 col-sm-12">
        <br/>
          <div className="justify-content-start">
            <h2 className="mb-4">Research Paper Publication. Simplified...</h2>
            <p>
            Subject expertise, personalized support, and 100% quality guarantee.
              
            </p>
            <br/>
            <Button
                className="btn-simple"
                color="success"
                href=""
                role="button"
                size="lg"
              >
                Submit Manuscript
              </Button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
        <br/>
        
          <div className="justify-content-end">
            <Table hover>
              <tbody>
                <tr>
                  <td>300+ Papers Edited</td>
                </tr>
                <tr>
                  <td>30+ Consulted</td>
                </tr>
                <tr>
                  <td>20+ Experts</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        
        </div>
      </div>
      
      </HeroContainer>

      {/* --- STYLES --- */}
      <style jsx>{`
       

        .href {
          display: table-cell;
          vertical-align: middle;
          
          text-align: center;
          font-size: ${theme.hero.h1.size};
          
          color: ${theme.color.brand.dark};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          width: 94%;
          height: 400px;

          

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: ${theme.background.color.brand};
          border: 0;
          border-radius: 50%;
          font-size: ${theme.font.size.m};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          width: ${theme.space.xl};
          height: ${theme.space.xl};

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            fill: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${HeroBanner});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
