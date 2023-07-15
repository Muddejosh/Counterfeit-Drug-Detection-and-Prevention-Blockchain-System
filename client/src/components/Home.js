
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBTypography 
} from 'mdb-react-ui-kit';
import step1Img from '../images/1.jpg';
import step2Img from '../images/2.jpg';
import step3Img from '../images/3.jpg';
import step4Img from '../images/4.jpg';
import Zeader from "./Zeader";
import Zooter from "./Zooter2";
import MyCarousel from "./MyCarousel";
import { ArrowRight } from "react-bootstrap-icons";
import React, { useState,useEffect } from 'react';
import Accordion from "./Accordion ";
function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };


    const [activeTab, setActiveTab] = useState('nav-home');
  
    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
    };
    
  return (
    <div> 
     <Zeader></Zeader>
    <div className="container-fluid ">
      <div className="header ">
      <MDBTypography tag='h3'>Securing Pharmacetical Supply Chain</MDBTypography>
        <h4><br/></h4>
        
      </div>
      <div className="container-fluid row ms-3">
     <Accordion/>
      <div className="container col-10">
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          className={`nav-link ${activeTab === 'nav-home' ? 'active' : ''}`}
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected={activeTab === 'nav-home'}
          onClick={() => handleTabClick('nav-home')}
        >
          Shop
        </button>
        <button
          className={`nav-link ${activeTab === 'nav-profile' ? 'active' : ''}`}
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-profile"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected={activeTab === 'nav-profile'}
          onClick={() => handleTabClick('nav-profile')}
        >
          Activity
        </button>
      </div>

      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabIndex="0"
        >
          <br /> 
          
            <legend><h2 className="featured">Featured Products</h2></legend>
       <fieldset className="myFieldset">
          <MyCarousel/>
          <MyCarousel/>
          </fieldset>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'nav-profile' ? 'show active' : ''}`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabIndex="0"
        >
          <br /><fieldset className="myFieldset2">
          <div className="cards-container">
          
        <div className="register">
          <MDBCard className="card" style={{ width: '300px' }}>
          <MDBCardImage src={step1Img} fluid alt='...' />
  
            <MDBCardBody>
              <MDBCardTitle>Step 1- Register Participants</MDBCardTitle>
              <MDBCardText>
                Owner Should Register Raw material suppliers ,Manufacturers,
                Distributors and Retailers
              </MDBCardText>
  
             <button onClick={redirect_to_roles} className="btn btn-success btn-sm">
  Register  &nbsp;<ArrowRight /></button>
            </MDBCardBody>
          </MDBCard>
         
  
        </div>
        <div className="ordermedicines" style={{ width: '300px' }}>
          <MDBCard className="card">
             <MDBCardImage src={step2Img} fluid alt='...' />
            <MDBCardBody>
              <MDBCardTitle>Step 2- Order Medicine</MDBCardTitle>
              <MDBCardText>Owner should order medicines. Ordered medicine is be seen by responsible parties</MDBCardText>
              <button onClick={redirect_to_addmed} className="btn btn-success btn-sm">
              Order Medicines  &nbsp;<ArrowRight /></button>
            </MDBCardBody>
          </MDBCard>
          
        </div>
        <div className="controlchain">
        <MDBCard className="card" style={{ width: '300px' }}>
    <div className="card-image-container">
      <MDBCardImage src={step3Img} fluid alt='...' />
    </div>
  
    <MDBCardBody>
      <MDBCardTitle>Step 3- Control Supply</MDBCardTitle>
      <MDBCardText>Control Supply Chain <br/><br/><br/></MDBCardText>
      <button onClick={redirect_to_supply} className="btn btn-success btn-sm">
        Control Supply Chain&nbsp;<ArrowRight />
      </button>
    </MDBCardBody>
  </MDBCard>
  
        </div>
        <div className="track">
          <MDBCard className="card" style={{ width: '300px' }}>
          <MDBCardImage src={step4Img} fluid alt='...' />
  
            <MDBCardBody>
              <MDBCardTitle>Track- Verify Drugs</MDBCardTitle>
              <MDBCardText>The medicines<br/><br/><br/></MDBCardText>
              <button onClick={redirect_to_track} className="btn btn-success btn-sm">
              Track Medicines&nbsp;<ArrowRight />
    </button>
            </MDBCardBody>
          </MDBCard>
        </div>
        
      
        </div></fieldset><h4><br/></h4><h4><br/></h4><h4><br/></h4><h4><br/></h4>
    <h4><br/></h4><h4><br/></h4><h4><br/><br/></h4>
 
   
        </div>
      </div>  
</div>
</div>
    </div>
    
    <Zooter></Zooter>
    </div>
  );
}

export default Home;
