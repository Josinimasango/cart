import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading status
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the process

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:3000/payment", {
          amount: 5000,
          id
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
          setLoading(false); // Stop loading after success
          navigate("/CompleteOrder");
        }
      } catch (error) {
        console.log("Error", error);
        setLoading(false); // Stop loading if there's an error
      }
    } else {
      console.log(error.message);
      setLoading(false); // Stop loading if there's an error with creating payment method
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', // Set full height to center vertically
      backgroundColor: '#282c34' // Optional: to match the background color
    }}>
      {!success ? (
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
          <fieldset style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "100%", padding: "20px", backgroundColor: "#1a1a1a", borderRadius: "5px" }}>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button 
            type="submit" 
            style={{ 
              width: "100%", // Full width button
              backgroundColor: "#4caf50", 
              color: "white", 
              border: "none", 
              padding: "10px 20px", 
              borderRadius: "5px", 
              cursor: "pointer",
              marginTop: "10px",
              opacity: loading ? 0.5 : 1, // Dim button if loading
              pointerEvents: loading ? "none" : "auto" // Prevent clicking if loading
            }}
            disabled={loading} // Disable button if loading
          >
            {loading ? "Processing..." : "Pay"} {/* Show processing state */}
          </button>
        </form>
      ) : (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h3>Woohoo!! You have just glammed up</h3>
        </div>
      )}
    </div>
  );
}




