import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'; // Import necessary MDBReact components
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import step10Img from '../images/1.jpg';
import step20Img from '../images/2.jpg';
import step30Img from '../images/3.jpg';
import step40Img from '../images/4.jpg';
import step50Img from '../images/2.jpg';
import step60Img from '../images/3.jpg';
import step70Img from '../images/4.jpg';
import step80Img from '../images/1.jpg';

import { ArrowRight } from "react-bootstrap-icons";


const MyCarousel = () => {
  return (
    <Carousel
      controls
      indicators={false}
      slide={true}
      fade={false}
      interval={3000}
      wrap={true}
      pause={false}
      keyboard={false}
      touch={true}
      style={{ height: '400px' }}
    >
      <Carousel.Item>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-success">Success</button>

      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
