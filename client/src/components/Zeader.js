import logo from '../images/logo.jpg';
import { Container, Table, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import emailjs from 'emailjs-com'; // Import the Email.js library

function Zeader() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const navigate = useNavigate();

  const redirect_to_home = () => {
    navigate("/home");
  };

  const redirect_to_track = () => {
    navigate("/track");
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    drugName: '',
    manufacturer: '',
    batchNumber: '',
    description: '',
    evidence: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      drugName: formData.drugName,
      manufacturer: formData.manufacturer,
      batchNumber: formData.batchNumber,
      description: formData.description,
      reporterName: formData.reporterName,
      reporterEmail: formData.reporterEmail,
    };
    // Send the email using Email.js
    // Create a new FormData object to include the file attachment
  const formDataWithFile = new FormData();
  formDataWithFile.append("evidence", formData.evidence); // Assuming you have a file input with the name "evidence"

  // Merge the templateParams and the FormData with the file
  for (const key in templateParams) {
    formDataWithFile.append(key, templateParams[key]);
  }
    console.log(templateParams); // Check the contents of the templateParams object
    console.log(formDataWithFile);


    emailjs.send('service_bz7mbkq', 'template_skzbrt3', templateParams, 'fU2TLpwxMHAY7SnpU')
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Optionally, you can show a success message or reset the form after successful submission.
        // For simplicity, we'll just reset the form in this example.
        setFormData({
          reporterName: '',
          reporterEmail: '',
          drugName: '',
          manufacturer: '',
          batchNumber: '',
          description: '',
          evidence: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Optionally, you can show an error message to the user if the email failed to send.
      });
  };

  return (
    <div>
      <div className='signed'>
        {authUser ? (
          <>
            <div className='signedtext'>{`Signed In as ${authUser.email}`}</div>
          </>
        ) : (
          <p>Signed Out</p>
        )}
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm bg-white authcontainer2">
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
            <button className="btn btn-danger me-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Report Counterfeit</button>
            <button class="btn btn-light me-2" onClick={redirect_to_home}>Home</button>
            <button class="btn btn-light me-2" onClick={redirect_to_track}>Track</button>

            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success me-2" type="submit">Search</button>
              <button class="btn btn-outline-danger " type="submit" onClick={userSignOut}>Logout</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Counterfeit Drug Report Modal */}
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Counterfeit Drug Report</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <form onSubmit={handleFormSubmit}>
                  <div class="form-group">
                    <label for="reporterName">Reporter's Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="reporterName"
                      name="reporterName"
                      value={formData.reporterName}
                      onChange={handleFormChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="reporterEmail">Reporter's Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={formData.reporterEmail}
                      onChange={handleFormChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="drugName">Drug Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="drugName"
                      name="drugName"
                      value={formData.drugName}
                      onChange={handleFormChange}
                      placeholder="Enter the drug name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="manufacturer">Manufacturer:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="manufacturer"
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleFormChange}
                      placeholder="Enter the drug manufacturer"
                    />
                  </div>
                  <div class="form-group">
                    <label for="batchNumber">Batch Number:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="batchNumber"
                      name="batchNumber"
                      value={formData.batchNumber}
                      onChange={handleFormChange}
                      placeholder="Enter the batch number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="description">Description of Suspected Counterfeit:</label>
                    <textarea
                      class="form-control"
                      id="description"
                      name="description"
                      rows="5"
                      value={formData.description}
                      onChange={handleFormChange}
                      placeholder="Provide a detailed description of the suspected counterfeit"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="evidence">Evidence (Attach files, if any):</label>
                    <input
                      type="file"
                      class="form-control-file"
                      id="evidence"
                      name="evidence"
                      value={formData.evidence}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success" onClick={handleFormSubmit}>Submit Report</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zeader;
