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
          <Jumbotron className="d-flex flex-column text-center">
            <h1 className="display-3">Top published papers</h1>
            <br/><br/>

            <p className="lead text-center"> Utilization of natural cellulose fiber in wastewater treatment</p>
            <hr className="my-2 text-center" />
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
        <div className="gap" />

        <div className="container container-fluid padding my-4">
        <div id="large-th">
  <div className="containment">
    <h1> Complete Clients’ Publications
</h1>
    <br/>
    <div className="choose">
      <a href="#list-th"><i className="fa fa-th-list" aria-hidden="true"></i></a>
      <a href="#large-th"><i className="fa fa-th-large" aria-hidden="true"></i></a>
    </div>
    <div id="list-th">
      <div className="book read">
        <div className="cover">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg"/>
        </div>
        <div className="description">
          <p className="title">Frankenstein<br/>
            <span className="author">Mary Shelley</span></p>
        </div>
      </div>
      <div className="book read">
        <div className="cover">
          <img src="https://alysbcohen.files.wordpress.com/2015/01/little-princess-book-cover.jpg"/>
        </div>
        <div className="description">
          <p className="title">A Little Princess<br/>
            <span className="author">Frances Hodgson Burnett</span></p>
        </div>
      </div>
      <div className="book unread">
        <div className="cover">
          <img src="http://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/028/28129-1.JPG"/>
        </div>
        <div className="description">
          <p className="title">Roughing It<br/>
            <span className="author">Mark Twain</span></p>
        </div>
      </div>
      <div className="book unread">
        <div className="cover">
          <img src="http://talkingwriting.com//sites/default/files/Bird-by-Bird-image1.jpg"/>
        </div>
        <div className="description">
          <p className="title">Bird By Bird<br/>
            <span className="author">Anne Lamott</span></p>
        </div>
      </div>
<div className="book read">
        <div className="cover">
          <img src="http://d.gr-assets.com/books/1414348859l/23209971.jpg"/>
        </div>
        <div className="description">
          <p className="title">Girl at War<br/>
            <span className="author">Sara Novic</span></p>
        </div>
      </div>
<div className="book read">
        <div className="cover">
          <img src="http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg"/>
        </div>
        <div className="description">
          <p className="title">The Alchemist <br/>
            <span className="author">Paulo Coelho</span></p>
        </div>
      </div>
<div className="book read">
        <div className="cover">
          <img src="http://eastchapelhillobserver.com/wp-content/uploads/2015/02/amazondotcom.jpg"/>
        </div>
        <div className="description">
          <p className="title">Anne of Green Gables<br/>
            <span className="author">Lucy Maud Montgomery</span></p>
        </div>
      </div>
<div className="book read">
        <div className="cover">
          <img src="http://www.penguinbooksindia.com/sites/default/files/book_image/9780143416319.jpg"/>
        </div>
        <div className="description">
          <p className="title">Animal Farm<br/>
            <span className="author">George Orwell</span></p>
        </div>
      </div>

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
          .gap {
            margin-bottom: 50px;
          }
          .container {
            margin: 0 auto;
            max-width: 910px;
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
            left: -.1cm;
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
            font-size: 20px;
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
            opacity: .1;
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
      </React.Fragment>
    );
  }
}


export default PapersPage;

//eslint-disable-next-line no-undef
