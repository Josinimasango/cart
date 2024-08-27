import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export default function CompleteOrder() {
  const [formData, setFormData] = useState({ name: '', surname: '', address: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission if needed (e.g., send data to an API)
    setSubmitted(true);
  };

  if (submitted) {
    // Redirect to homepage after showing the message
    setTimeout(() => {
      navigate('/'); // Redirect to homepage
    }, 3000); // Adjust time (in milliseconds) as needed
  }

  return (
    <div style={{ textAlign: "center", color: "#fff", backgroundColor: "#1a1a1a", padding: "20px", minHeight: "100vh" }}>
      {!submitted ? (
        <>
          <h2 style={{ fontWeight: "bold", color: "black", backgroundColor: "white", padding: "10px", borderRadius: "5px" }}>
            Please complete your order
          </h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px auto", backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "8px" }}>
            <fieldset style={{ border: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                  boxSizing: "border-box"
                }}
              />
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                required
                placeholder="Enter your surname"
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                  boxSizing: "border-box"
                }}
              />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
                style={{
                  marginBottom: "20px",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                  boxSizing: "border-box"
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#4caf50"}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </>
      ) : (
        <div style={{
          textAlign: "center",
          color: "black",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          fontSize: "26px",
          fontStyle: "oblique",
        }}>
          <h1>Woohoo!! You have just been GLAMMED up😊💄</h1>
        </div>
      )}
    </div>
  );
}



