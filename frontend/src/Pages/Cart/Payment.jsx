import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PaymentOptions.css';

const PaymentOptions = () => {
  const [flag, setFlag] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  },[])
  if (flag) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="payment-options-container">
      <h1>Choose Payment Method</h1>
      <div className="payment-options">
        <Link to="/cash-on-delivery" className="payment-option">
          <img src="https://img.freepik.com/premium-vector/cash-delivery_569841-162.jpg?w=740" alt="Cash on Delivery" />
          <span>Cash on Delivery</span>
        </Link>
        <Link to="/online-payment" className="payment-option">
          <img src="https://img.freepik.com/premium-photo/hands-using-phone-credit-card-online-payment_187217-47.jpg?size=626&ext=jpg&ga=GA1.2.1303322746.1689759247&semt=ais" alt="Online Payment" />
          <span>Online Payment</span>
        </Link>
      </div>
    </div>
  );
};

export default PaymentOptions;
