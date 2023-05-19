import React, { useEffect, useRef } from 'react';
import QrScanner from 'qr-scanner';
import 'qr-scanner/qr-scanner-worker.min.js';
import { Container, Table, Form, Button, FormControl } from 'react-bootstrap';


const WebcamScanner = () => {
  const videoRef = useRef(null);
  const camQrResultRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    QrScanner.WORKER_PATH = 'qr-scanner-worker.min.js';

    const video = videoRef.current;
    const camQrResult = camQrResultRef.current;

    scannerRef.current = new QrScanner(video, (result) => {
      setResult(camQrResult, result);
    }, {
      onDecodeError: (error) => {
        camQrResult.textContent = error;
        camQrResult.style.color = 'inherit';
      },
      highlightScanRegion: true,
      highlightCodeOutline: true,
    });

    return () => {
      scannerRef.current.stop();
    };
  }, []);

  const startScanner = () => {
    scannerRef.current.start();
  };

  const stopScanner = () => {
    scannerRef.current.stop();
  };

  const setResult = (label, result) => {
    console.log(result.data);
    label.textContent = result.data;
    label.style.color = 'teal';
    clearTimeout(label.highlightTimeout);
    label.highlightTimeout = setTimeout(() => (label.style.color = 'inherit'), 100);
  };

  return (
    <div>
    <div className='cc'>
      <b>Scan from WebCam</b>&nbsp;&nbsp;
      
      <div>
      <Button onClick={startScanner} variant="success">
         Start verify
            </Button>&nbsp;&nbsp;
        {/* <button onClick={startScanner}>Start</button> */}
      <Button onClick={stopScanner} variant="danger">
         Stop verify
       </Button>


        {/* <button onClick={stopScanner}>Stop</button> */}
      </div>
       &nbsp;

      <div style={{ width: '400px', overflow: 'hidden' }}>
      <video ref={videoRef} id="qr-video" style={{ width: '100%', height: '100%' }}></video>
      </div>
      <div className='detor'>
        <b>Detected QR code: </b>
        <span ref={camQrResultRef} id="cam-qr-result">None</span>
      </div>
    </div>
    </div>
  );
};

export default WebcamScanner;
