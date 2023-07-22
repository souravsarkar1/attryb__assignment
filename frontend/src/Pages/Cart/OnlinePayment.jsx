import React, { useEffect, useState } from 'react';
import './OnlinePayment.css'; // Don't forget to create and import the OnlinePayment.css file for styling
import { useNavigate } from 'react-router-dom';

const OnlinePayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  },[])
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      cardNumber.length !== 16 ||
      !isExpiryDateValid() ||
      cvv.length !== 3 ||
      phoneNumber.length !== 10
    ) {
      alert('Please enter valid payment details and phone number.');
      return;
    } else {
      const enteredPin = prompt('Please enter your PIN:');
      if (enteredPin === null) {
        alert('Payment canceled.');
      } else if (enteredPin.trim() === '1234') {
        alert('Your payment was successful.');
        navigate('/');
      } else {
        alert('Incorrect PIN. Payment failed.');
      }
    }
  };
  

  const isExpiryDateValid = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Note: January is 0, so we add 1.
    const [expiryMonth, expiryYear] = expiryDate.split('/').map((value) => parseInt(value.trim()));

    if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
      return false;
    }

    if (expiryYear >= currentYear + 4 || currentYear === expiryYear) {
      return false;
    }

    if (expiryMonth < 1 || expiryMonth > 12 || isNaN(expiryMonth) || isNaN(expiryYear)) {
      return false;
    }

    return true;
  };
  if (flag) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="payment-page">
      <h1>Online Payment</h1>
      <p>Please enter your payment details below:</p>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default OnlinePayment;
