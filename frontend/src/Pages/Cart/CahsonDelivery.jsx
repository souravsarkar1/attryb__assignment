import React, { useEffect, useState } from 'react';
import './CashOnDelivery.css';
import { useNavigate } from 'react-router-dom';

const CashOnDelivery = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [villageTown, setVillageTown] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [flag, setFlag] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  },[])
  
  const handleBuy = () => {
    if (!fullName || !addressLine1 || !villageTown || !pinCode) {
      alert("Please fill in all the required fields.");
    } else {
      const address = `${fullName}, ${addressLine1}, ${addressLine2}, ${villageTown}, ${pinCode}`;
      alert(`Your Product is Ordered. Delivery Address: ${address}`);

      // Redirect to home page after a brief delay (e.g., 2 seconds)
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };
  if (flag) {
    return <h1>Loading....</h1>
  }
  return (
    <div className="payment-page">
      <h1>Cash on Delivery</h1>
      <p>Please keep the cash ready for payment when the order is delivered.</p>

      <div className="address-form">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          placeholder="Enter address line 1"
        />

        <label htmlFor="addressLine2">Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          placeholder="Enter address line 2 (optional)"
        />

        <label htmlFor="villageTown">Village or Town:</label>
        <input
          type="text"
          id="villageTown"
          value={villageTown}
          onChange={(e) => setVillageTown(e.target.value)}
          placeholder="Enter your village or town"
        />

        <label htmlFor="pinCode">Pin Code:</label>
        <input
          type="text"
          id="pinCode"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="Enter your pin code"
        />
      </div>

      <button onClick={handleBuy}>Click Here to Complete Purchases</button>
    </div>
  );
};

export default CashOnDelivery;
