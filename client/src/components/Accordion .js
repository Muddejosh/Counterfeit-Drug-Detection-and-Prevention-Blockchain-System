import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import track from '../images/track.png';
import history from '../images/history.png';
import secure from '../images/secure.png';
import { Image } from 'react-bootstrap';


const Accordion = () => {
  return (
    <div className="accordion col-2" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span className='white'>Order Tracking</span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          <img src={track} style={{ width: "100%" }} />
          <br/>
          <br/>
         You can enter your order ID or tracking number to check the current location and delivery status of your package.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Order History
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          <img src={history} style={{ width: "100%" }} />
          <br/>
          <br/>
        You can view details such as order date, items purchased, and order status. It helps you keep track of your previous transactions and reorder items if needed.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Secure Payments
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
          <img src={secure} style={{ width: "100%" }} />
          <br/>
          <br/>
         We prioritize the security of your payment information and offer various secure payment methods such as credit cards, PayPal, and cryptocurrency. You can be confident that your financial details are protected during the payment process.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
