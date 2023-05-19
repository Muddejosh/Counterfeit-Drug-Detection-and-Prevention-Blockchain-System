import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';
import 'qr-scanner/qr-scanner-worker.min.js';
import { Container, Table, Form, Button, FormControl } from 'react-bootstrap';


const Scanner = () => {
  const [result, setResult] = useState('');

  useEffect(() => {
    QrScanner.WORKER_PATH = 'qr-scanner-worker.min.js';

  }, []);

  const readCode = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    QrScanner.scanImage(file, { returnDetailedScanResult: true })
      .then((result) => setResult(result.data)) // Update the result state with the scanned data
      .catch((e) => setResult('No QR code found.'));
  };

  return (
    <div style={{marginLeft: 35}}>
      <div ><b>Scan from file</b></div>
      <br/>
      <input type="file" onChange={(e) => readCode(e)}></input>
      <div className='detor'>
     {result && <p>Result: {result}</p>}   
      </div>
      
    </div>
  );
};

export default Scanner;
