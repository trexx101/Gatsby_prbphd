import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div>
        <div className="footer-wrapper">
          <section >
            <div className="container">
              <div className="row padding">

                <div className="col-xs-6 col-sm-6 col-md-4">
                  
                  <div className="row padding mb-3">
                  <div className="col-md-2">
                  <i className="fas fa-map-marker-alt fa-2x icon-color"></i>
                  </div>
                  <div className="col-md-10">
                    <h5>OUR LOCATION</h5>
                    <p>218, The LaunchPad, Cyberjaya, MY</p>
                  </div>
                </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4">
                <div className="row padding mb-3">
                  <div className="col-md-2">
                  <i className="fas fa-paper-plane fa-2x icon-color"></i>
                  </div>
                  <div className="col-md-10">
                    <h5>SEND E-MAIL</h5>
                    <p>proofreadingbyphd@gmail.com</p>
                  </div>
                </div>
                
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4">
                
                <div className="row padding mb-3">
                  <div className="col-md-2">
                  <i className="fas fa-phone fa-2x icon-color"></i>
                  </div>
                  <div className="col-md-10">
                  <h5>CONTACT US</h5>
                    <p>+60 (0) 99 87 65 43 21</p>
                  </div>
                </div>
                </div>

              </div>
            </div>


          </section>
          <footer className="footer"  >
          <div className="text-white text-center">
          Copy Right © By Thetha 2019 | All Rights Reserved.
          </div>
          </footer>
        </div>
      </div>
      

      {/* --- STYLES --- */}
      <style jsx>{`
        .icon-left {
          display: inline-block;
          position: absolute;
          text-align: center;
          width: 30px;
          height: 100%;
        }
        .icon-color {
          color: ${theme.color.special.attention};
        }

        .footer-wrapper{
          padding-top: 40px;
          background-color: ${theme.color.neutral.gray.a};
          bottom: 0;
          width: 100%;
        }

        .bottom {
          color: #bdc3cf;
        }

        .footer {
          background-color: ${theme.color.neutral.gray.b};
          padding: ${theme.space.inset.default};
          
          
          :global(ul) {
            list-style: none;
            text-align: center;
            padding: 0;

            :global(li) {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.xxs} ${theme.space.s};
              position: relative;
              display: inline-block;

              &::after {
                content: "•";
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding-top: 30px;
            padding-bottom: 30px;
          border-top: 1px solid #333;

          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
