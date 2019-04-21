import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import { Col, Table, Button } from 'reactstrap';

import FaArrowDown from "react-icons/lib/fa/arrow-down";
import {FacebookProvider, Page  }  from 'react-facebook';
const fbGroup = '<div class="fb-group" data-href="https://www.facebook.com/proofreadingbyPhD/" data-width="280" data-show-social-context="true" data-show-metadata="false"></div>';

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="holder">
        <Particles
          params={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 868.0624057955
                }
              },
              color: {
                value: "#ecd018"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#e2d018",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 5,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: false
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 60,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }   
            },
            retina_detect: true
          }}
          style={{
            background: `${theme.hero.background}`,
            minHeight: "100vh",
            width: "100%"
          }}
        />
        <div className="href row ">
        <div className="col-md-8 col-sm-12 my-sm-7">
        <br/>
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
        <div className="col-md-offset-3 col-md-4">
        <br/>
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
        
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .holder {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
        }
        .hero {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: ${theme.space.inset.l};
        }

        .href {
          position: Absolute;
          left: 80px;
          text-align: center;
          font-size: ${theme.hero.h1.size};
          
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          width: 94%;
          height: 366px;

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
            background-image: url(${backgrounds.desktop});
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
