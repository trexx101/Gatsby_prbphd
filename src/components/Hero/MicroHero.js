import React from "react";
import PropTypes from "prop-types";
import { Col, Table, Button } from 'reactstrap';
import styled from 'styled-components'

import HeroBanner from "../../images/jpg/Banner.jpg";
import banner2 from "../../assets/img/chester-wade.jpg";

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
const MicroHero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <HeroContainer style={{ backgroundImage: `url("${banner2}")` }}>
      <div className="href">
      <div className="row">
        <div className="col-md-12 col-sm-12">
        <br/>
          <div className="justify-content-start">
            <h2 className="text-light mb-4">Did you know that university rankings depends on its research output</h2>
            <p className="text-light">
            Subject expertise, personalized support, and 100% quality guarantee.
              
            </p>
            <br/>
            <div className="justify-content-end">
            <Table hover>
              <tbody>
                <tr>
                  <td ><p className="text-muted">1200+ Workshops & webminars</p></td>
                </tr>
                <tr>
                  <td ><p className="text-muted">20+ Countries</p></td>
                </tr>
                <tr>
                  <td ><p className="text-muted">1500+ Studenets</p></td>
                </tr>
              </tbody>
            </Table>
          </div>
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

MicroHero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default MicroHero;
