import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Row, Glyphicon, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

export default class Social extends React.Component{

  render(){
    return(
      <div className='container-fluid' >
        <Row className='center-footer'>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          <Col xs={12} sm={6} md={3} lg={2} className="wraper-blog-first">
            <FormGroup>
              <InputGroup>
                <FormControl type="text" placeholder="Enter email for newsletter..."/>
                <InputGroup.Addon>
                  <Glyphicon glyph="chevron-right"/>
               </InputGroup.Addon>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col xsHidden smHidden md={6} lg={5} className="wraper-blog-sekond"></Col>
          <Col xs={12} sm={6} md={3} lg={3} className="wraper-blog-third">
            <div className=" footer-center-social">
              <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a>
              <a href="https://www.pinterest.com"><i className="fa fa-pinterest-p"></i></a>
              <a href="https://plus.google.com"><i className="fa fa-google-plus" ></i></a>
            </div>
          </Col>
          <Col xsHidden smHidden mdHidden lg={1}></Col>
          </Row>
       </div>
      )
    }
  }
