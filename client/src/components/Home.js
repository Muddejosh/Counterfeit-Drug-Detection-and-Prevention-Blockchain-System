import React from "react";
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
  return (
    <div className="container">
    <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
        <MDBTypography tag='h1'><br/></MDBTypography>
        </MDBContainer>
      </MDBNavbar>
      <div className="header">
      <MDBTypography tag='h2'>C.D.D.I.S -Securing Pharmacetical Supply Chain</MDBTypography>
        <h4><br/></h4>
      </div>

      <div className="cards-container">
        
      <div className="register">
        <MDBCard className="card" style={{ width: '300px' }}>
        <MDBCardImage src={step1Img} fluid alt='...' />

          <MDBCardBody>
            <MDBCardTitle>Step 1- Resgister Participants</MDBCardTitle>
            <MDBCardText>
              Owner Should Register Raw material suppliers ,Manufacturers,
              Distributors and Retailers
            </MDBCardText>

           <button onClick={redirect_to_roles} className="btn btn-success btn-sm">
Register  </button>
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
            Order Medicines  </button>
          </MDBCardBody>
        </MDBCard>
        
      </div>
      <div className="controlchain">
        <MDBCard className="card" style={{ width: '300px' }}>
        <MDBCardImage src={step3Img} fluid alt='...' />

          <MDBCardBody>
            <MDBCardTitle>Step 3- Control Supply</MDBCardTitle>
            <MDBCardText>Control Supply Chain <br/><br/><br/></MDBCardText>
            <button onClick={redirect_to_supply} className="btn btn-success btn-sm">
            Control Supply Chain
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
            Track Medicines
  </button>
          </MDBCardBody>
        </MDBCard>
      </div>
      

      </div>
    </div>
  );
}

export default Home;
