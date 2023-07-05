import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";




function Zeader() {
  const navigate = useNavigate();

  const redirect_to_home = () => {
    navigate("/");
    
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm bg-white rounded">
  <div class="container-fluid">
    <a class="navbar-brand" href="" className='me-2'>
    <img src={logo} style={{ width: '100px' , marginLeft: '20px'}} onClick={redirect_to_home} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
          <a class="nav-link" href=""></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"></a>
        </li>
      </ul>
      <button class="btn btn-light me-2" onClick={redirect_to_home}>Home</button>
      <button class="btn btn-light me-2" onClick={redirect_to_track}>Track</button>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        );
    }


export default Zeader;