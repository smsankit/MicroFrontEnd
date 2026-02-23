import React, { Fragment, useState, useEffect } from "react";
import "./styles.css";
import FunFact from './FunFact'

const InsuranceDetails = ({ insuranceDetails }) => {
  const details = insuranceDetails || {
    policyNumber: "",
    insuranceType: "",
    premium: "",
    coverageAmount: "",
    insuranceProvider: "",
  };



  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState(null);

  useEffect(() => {
    

    const handleMessageEvent = (event) => {
      setReceivedMessage(event.detail.message);
    };

    window.addEventListener("sendMessageEvent", handleMessageEvent);

    return () => {
      window.removeEventListener("sendMessageEvent", handleMessageEvent);
    };
  }, []);

  

  const handlePayPremiumClick = () => {
    if (!selectedPaymentOption) {
      setErrorMessage("Please select a payment method.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("");
      alert("Proceeding with payment...");
    }
  };

  const handleHideCard = () => {
    setIsCardVisible(false);
  };

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  return (
    <Fragment>
      <div className="insurance-container">
        <div className="fun-fact-container">
          <div className="card shadow-lg">
            <div className="card-header bg-dark text-white">
              <h3>Fun Fact</h3>
            </div>
            <div className="card-body">
              <FunFact></FunFact>
            </div>
          </div>
        </div>

        <div className="row main-content">
          <div className="col-md-6">
            <div className="card shadow-lg mb-4 insurance-details-card">
              <div className="card-header bg-success text-white">
                <h3>Insurance Details</h3>
              </div>
              <div className="card-body">
                <p>
                  <strong>Policy Number:</strong> {details.policyNumber}
                </p>
                <p>
                  <strong>Insurance Type:</strong> {details.insuranceType}
                </p>
                <p>
                  <strong>Premium:</strong> ₹{details.premium}
                </p>
                <p>
                  <strong>Coverage Amount:</strong> ₹{details.coverageAmount}
                </p>
                <p>
                  <strong>Insurance Provider:</strong>{' '}
                  {details.insuranceProvider}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-start align-items-center">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsCardVisible(true)}
                >
                  Pay the Premium
                </button>
                <span className="ms-3 text-success discount-text">
                  <strong>Get 10% Discount! </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {isCardVisible && (
              <div className="card shadow-lg mb-4 payment-card">
                <div className="card-header bg-warning text-black">
                  <h3>Select Payment Option</h3>
                </div>
                <div className="card-body">
                  <div className="payment-options-grid">
                    <div
                      className={`payment-option-card ${
                        selectedPaymentOption === 'Card' ? 'selected' : ''
                      }`}
                      onClick={() =>
                        handlePaymentOptionChange({
                          target: { value: 'Card' },
                        })
                      }
                    >
                      <i className="fas fa-credit-card fa-2x"></i>
                      <p>Credit/Debit Card</p>
                    </div>
                    <div
                      className={`payment-option-card ${
                        selectedPaymentOption === 'Net Banking'
                          ? 'selected'
                          : ''
                      }`}
                      onClick={() =>
                        handlePaymentOptionChange({
                          target: { value: 'Net Banking' },
                        })
                      }
                    >
                      <i className="fas fa-university fa-2x"></i>
                      <p>Net Banking</p>
                    </div>
                    <div
                      className={`payment-option-card ${
                        selectedPaymentOption === 'UPI' ? 'selected' : ''
                      }`}
                      onClick={() =>
                        handlePaymentOptionChange({
                          target: { value: 'UPI' },
                        })
                      }
                    >
                      <i className="fas fa-mobile-alt fa-2x"></i>
                      <p>UPI</p>
                    </div>
                  </div>
                  {errorMessage && (
                    <div className="alert alert-danger mt-3">
                      {errorMessage}
                    </div>
                  )}
                </div>
                <div className="card-footer d-flex justify-content-start align-items-center">
                  <button
                    className="btn btn-primary"
                    onClick={handlePayPremiumClick}
                  >
                    Pay ₹{details.premium}
                  </button>
                  <button
                    className="btn btn-secondary ms-3"
                    onClick={handleHideCard}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {receivedMessage && (
          <div className="alert alert-info mt-4">
            <strong>Message Received:</strong> {receivedMessage}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default InsuranceDetails;
