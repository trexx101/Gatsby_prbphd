import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import { Button, Container } from "reactstrap";
//import { Col } from "antd";
import { Row, Col, Form, ButtonGroup , Jumbotron} from "reactstrap";
import companyLogo from "../images/logo/imageoflogo.png";
import chiefEditor from "../images/logo/chief.jpg";

class PapersPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    


    return (
      <React.Fragment>
        <div className="gap" />
        <hr className="my-4" />
        <div className="gap" />

        <div>
          <Jumbotron>
            <h1 className="display-3">top Published papers</h1>
            <p className="lead"> Utilization of natural cellulose fiber in wastewater treatment</p>
            <hr className="my-2" />
            <p>By Nur Syazwani Abd Rahman, Mohd Firdaus Yahya, Baharin Azahari</p>
            <p className="lead">
              <ButtonGroup size="lg">
                <Button color="primary">Crossmark Publishing</Button>
                <Button color="primary">Chemistry</Button>
              </ButtonGroup>
            </p>
          </Jumbotron>
        </div>

        <div className="gap" />
        <hr className="my-4" />
        <div className="gap" />



        <style jsx>{`
          .hr {
            margin: 0;
            border: 0;
          }
          .gap {
            margin-bottom: 50px;
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


export default PapersPage;

//eslint-disable-next-line no-undef
