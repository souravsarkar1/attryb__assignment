import React from 'react';
import './CashOnDelivery.css';
import { useNavigate } from 'react-router-dom';

const CashOnDelivery = () => {
    const navigate = useNavigate();
    const handleBuy =()=>{
        alert("Your Product is Orderd");
        navigate("/")
    }
  return (
    <div className="payment-page">
      <h1>Cash on Delivery</h1>
      <p>Please keep the cash ready for payment when the order is delivered.</p>
      <button onClick={handleBuy}>Click Here to Complete Purchages</button>
    </div>
  );
};

export default CashOnDelivery;
