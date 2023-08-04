import React, { useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import step10Img from '../images/advil.jfif';
import step20Img from '../images/amoxilin.jfif';
import step30Img from '../images/potasium.webp';
import step40Img from '../images/zedex.png';
import step50Img from '../images/13.jpeg';
import step60Img from '../images/piritex.jpg';
import step70Img from '../images/pedialyte.jfif';
import step80Img from '../images/14.webp';
import { ArrowRight } from "react-bootstrap-icons";
import { Button, Modal } from 'react-bootstrap';

const MyCarousel = () => {
  const carouselStyle = {
    backgroundColor: '#ffffff',
  };
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [copied, setCopied] = useState(false);

  const handleModalOpen = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleCopyToClipboard = () => {
    // Copy the drug title to the clipboard
    navigator.clipboard.writeText(modalData.title);
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
                <a onClick={() => handleModalOpen({ 
                  imgSrc: step10Img, 
                  title: 'Advil (Ibuprofen) tablets', 
                  description: 'An over-the-counter pain reliever and fever reducer.' 
                })}>
                  <MDBCard className="card" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                    <MDBCardImage src={step10Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Advil (Ibuprofen) tablets</MDBCardTitle>
                      <MDBCardText>An over-the-counter pain reliever and fever reducer.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </MDBCard>
                </a>
              </div>
            </div>
            <Modal show={showModal} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <h3>{modalData.title}</h3>
              </Modal.Header>
              <img src={modalData.imgSrc} fluid alt="..." />
              <Modal.Body>
                <p>{modalData.title}</p>
                <button className="btn btn-success" onClick={handleCopyToClipboard} >
                  Copy to clipboard
                </button>
              </Modal.Body>
            </Modal>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step20Img, 
                    title: 'Amoxicillin capsules', 
                    description: 'An antibiotic medication commonly prescribed for bacterial infections.' 
                  })}>
                    <MDBCardImage src={step20Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Amoxicillin capsules</MDBCardTitle>
                      <MDBCardText>An antibiotic medication commonly prescribed for bacterial infections.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step60Img, 
                    title: 'Piritex', 
                    description: 'An antihistamine used to relieve allergy symptoms and aid sleep.' 
                  })}>
                    <MDBCardImage src={step60Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Piritex</MDBCardTitle>
                      <MDBCardText>An antihistamine used to relieve allergy symptoms and aid sleep.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step30Img, 
                    title: 'Potassium Tablets', 
                    description: 'A prescription medication used for the treatment of anxiety disorders.' 
                  })}>
                    <MDBCardImage src={step30Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Potassium Tablets</MDBCardTitle>
                      <MDBCardText>A prescription medication used for the treatment of anxiety disorders.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
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
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step70Img, 
                    title: 'Pedialyte liquid solution', 
                    description: 'Oral rehydration solution used to prevent or treat dehydration.' 
                  })}>
                    <MDBCardImage src={step70Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Pedialyte liquid solution</MDBCardTitle>
                      <MDBCardText>Oral rehydration solution used to prevent or treat dehydration.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step40Img, 
                    title: 'Zedex', 
                    description: 'A prescription medication used to lower cholesterol levels.' 
                  })}>
                    <MDBCardImage src={step40Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Zedex</MDBCardTitle>
                      <MDBCardText>A prescription medication used to lower cholesterol levels.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step80Img, 
                    title: 'Paracetamol BP', 
                    description: 'An antidepressant medication used to treat depression and anxiety.' 
                  })}>
                    <MDBCardImage src={step80Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Paracetamol BP</MDBCardTitle>
                      <MDBCardText>An antidepressant medication used to treat depression and anxiety.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
                </MDBCard>
              </div>
            </div>
            <div className="col-3">
              <div className="register">
                <MDBCard className="" style={{ width: '300px', marginTop: '20px', marginBottom:'20px'}}>
                  <a onClick={() => handleModalOpen({ 
                    imgSrc: step50Img, 
                    title: 'Panadol Extra', 
                    description: 'A topical gel used to relieve joint pain caused by osteoarthritis.' 
                  })}>
                    <MDBCardImage src={step50Img} fluid alt="..." />
                    <MDBCardBody>
                      <MDBCardTitle>Panadol Extra</MDBCardTitle>
                      <MDBCardText>A topical gel used to relieve joint pain caused by osteoarthritis.</MDBCardText>
                      <button className="btn btn-success btn-sm">
                        View <ArrowRight />
                      </button>
                    </MDBCardBody>
                  </a>
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