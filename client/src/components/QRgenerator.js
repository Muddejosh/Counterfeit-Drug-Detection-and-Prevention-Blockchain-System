import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Web3 from "web3";
import SupplyChainABI from "../artifacts/SupplyChain.json";
import { useNavigate } from "react-router-dom";
import { Container, Table, Form, Button, FormControl } from 'react-bootstrap';
import { ArrowLeft, Download } from 'react-bootstrap-icons';
import QRCode from 'qrcode.react';
import Scanner from "./Scanner";
import WebcamScanner from './WebcamScanner';
import Zeader from "./Zeader";
import Zooter from "./Zooter2";



function QRGenerator() {

  const [qr, setQr] = useState('This Is the Defualt Qr');
  const navigate = useNavigate();
  useEffect(() => {
    loadWeb3();
    loadBlockchaindata();
  }, []);
  const [currentaccount, setCurrentaccount] = useState("");
  const [loader, setloader] = useState(true);
  const [SupplyChain, setSupplyChain] = useState();
  const [MED, setMED] = useState();
  const [MedStage, setMedStage] = useState();
  const [ID, setID] = useState();
  const generateQRCode = (rowData) => {
    // Access the data from the respective row and update the input method
    const { id, name, description } = rowData;
    const qrContent = `Medicine ID: ${id}\nName: ${name}\nDescription: ${description}`;
  
    // Update the input method with the QR code content
    setQr(qrContent); // Replace `setInputValue` with your input method setter function
    const tableContentsElement = document.getElementById("tableContents");
    tableContentsElement.innerHTML = `<h4 class="cc"><b>Drug Contents</h4><br><span class="green"> Medicine ID:</span>&nbsp;&nbsp;<br> ${id}<br> <span class="green">Name:&nbsp;&nbsp;</span> <br>${name}<br> <span class="green">Description:&nbsp;&nbsp;</span><br>${description}`;
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();
    const networkData = SupplyChainABI.networks[networkId];
    if (networkData) {
      const supplychain = new web3.eth.Contract(
        SupplyChainABI.abi,
        networkData.address
      );
      setSupplyChain(supplychain);
      var i;
      const medCtr = await supplychain.methods.medicineCtr().call();
      const med = {};
      const medStage = [];
      for (i = 0; i < medCtr; i++) {
        med[i] = await supplychain.methods.MedicineStock(i + 1).call();
        medStage[i] = await supplychain.methods.showStage(i + 1).call();
      }
      setMED(med);
      setMedStage(medStage);
      setloader(false);
    } else {
      window.alert("The smart contract is not deployed to current network");
    }
  };
  if (loader) {
    return (
      <div>
        <h1 className="wait">Loading...</h1>
      </div>
    );
  }
  const redirect_to_home = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    setQr(event.target.value);
  };

  const downloadQR = () => {
    const canvas = document.getElementById('myqr');
    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'myqr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

      


  };

  return (
    <div>
    <Zeader/>

    <Container className="text-left x" >
      <br/>
      <br/>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <span>
          <b>Current Account Address:</b> {currentaccount}
        </span>
        </nav>
        &nbsp;&nbsp;&nbsp;&nbsp;

        
        <div className="shadow p-3 mb-5 bg-white rounded ptsd">
        <h4>Generate | Verify QRCodes</h4>
    <div>
      <Link to="/Supply">
        <Button style={{ marginRight: 10 }} variant="success">
          <ArrowLeft />&nbsp;Back
        </Button>
      </Link>
      <span>QR Generator</span>
      <br/>
      <br/>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th scope="col">Medicine ID</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Current Processing Stage</th>
      <th scope="col">QR Code</th>
    </tr>
  </thead>
  <tbody>
    {Object.keys(MED).map(function (key) {
        const desiredMedStage = "Manufacturing Stage";
      // Check if the current medStage value matches the desired filter value
      if (MedStage[key] === desiredMedStage) {
        return (
          <tr key={key}>
            <td>{MED[key].id}</td>
            <td>{MED[key].name}</td>
            <td>{MED[key].description}</td>
            <td>{MedStage[key]}</td>
            <td>
            <Button variant="outline-success" onClick={() => generateQRCode(MED[key])}>
              Generate QR
            </Button>
          </td>
          </tr>
        );
      } else {
        // Return null for rows that don't match the filter value
        return null;
      }
    })}
  </tbody>
</Table>

        <div className="cards-container">
      <div >
        {qr ? (
          <QRCode id="myqr" value={qr} size={320} includeMargin={true} />
        ) : (
          <p>No QR code preview</p>
        )} 
      </div>
      <div  className="cc flex-item"  id="tableContents"></div>
       <div  >
        <WebcamScanner></WebcamScanner>
        </div>   


       
    </div>
      <div size={320} includeMargin={true}>
        {qr ? (
          <div className="d-flex align-items-center">
            <Button onClick={downloadQR} style={{ marginLeft: 30 }} variant="success">
              Download QR
            </Button>    
          </div>
        ) : (
          ''
        )}
        <hr></hr>
               <Scanner></Scanner>

      </div>

    </div>
    </div>

    </div>
    </Container>
    <Zooter/>
    </div>

  );
}

export default QRGenerator;
