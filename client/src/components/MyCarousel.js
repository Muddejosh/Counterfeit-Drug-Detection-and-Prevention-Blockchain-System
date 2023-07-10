import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'; // Import necessary MDBReact components
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import step10Img from '../images/advil.jfif';
import step20Img from '../images/amoxilin.jfif';
import step30Img from '../images/xanax.jfif';
import step40Img from '../images/lipitor.jfif';
import step50Img from '../images/voltaren.jfif';
import step60Img from '../images/penadryl.jfif';
import step70Img from '../images/pedialyte.jfif';
import step80Img from '../images/zoloft.jfif';
import { ArrowRight } from "react-bootstrap-icons";


const MyCarousel = () => {
    const carouselStyle = {
        backgroundColor: '#ffffff', // Set the background color to white
      };
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
      style={{ height: '400px'}}
      

    >
      <Carousel.Item style={carouselStyle}>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step10Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Advil (Ibuprofen) tablets</MDBCardTitle>
                    <MDBCardText>
                    An over-the-counter pain reliever and fever reducer.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                      Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
            <div className="register">
            <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step20Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Amoxicillin capsules</MDBCardTitle>
                    <MDBCardText>
                    An antibiotic medication commonly prescribed for bacterial infections.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
            <div className="register">
            <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step60Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Benadryl syrup</MDBCardTitle>
                    <MDBCardText>
                    An antihistamine used to relieve allergy symptoms and aid sleep.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
              <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step30Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Xanax (Alprazolam) tablets</MDBCardTitle>
                    <MDBCardText>
                    A prescription medication used for the treatment of anxiety disorders.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={carouselStyle}>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col-3">
              <div className="register">
              <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step70Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Pedialyte liquid solution</MDBCardTitle>
                    <MDBCardText>
                    Oral rehydration solution used to prevent or treat dehydration.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
            <div className="register">
            <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step40Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Lipitor (Atorvastatin) tablets</MDBCardTitle>
                    <MDBCardText>
                    A prescription medication used to lower cholesterol levels.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
            <div className="register">
            <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step80Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Zoloft (Sertraline) capsules</MDBCardTitle>
                    <MDBCardText>
                    An antidepressant medication used to treat depression and anxiety.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
              <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <MDBCardImage src={step50Img} fluid alt="..." />
                  <MDBCardBody>
                    <MDBCardTitle>Voltaren (Diclofenac) gel</MDBCardTitle>
                    <MDBCardText>
                    A topical gel used to relieve joint pain caused by osteoarthritis.
                    </MDBCardText>
                    <button  className="btn btn-success btn-sm">
                    Order <ArrowRight />
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
