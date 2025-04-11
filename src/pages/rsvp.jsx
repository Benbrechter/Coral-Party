import { useState } from 'react';
const API_URL =  'https://coral-party.onrender.com';

export default function Rsvp() {
  const [showPopup, setShowPopup] = useState(false);
  
  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = Object.fromEntries(formData.entries());
        
        const response = await fetch(`${API_URL}/api/rsvp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formDataObject)
        });
        
        const result = await response.json();
        
        if (result.success) {
          console.log("Form submitted");
          setShowPopup(true);
        } else {
          alert('Something went wrong. Please try again later.');
        }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Failed to submit RSVP. Please check your connection and try again.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="formbox">
      
      <div className="form-container">
        <h1 className="form-title">Event RSVP</h1>
        <p className="form-subtitle">Please join us on <strong>May 3rd, 2025 at 6:00 PM</strong></p>
        
        <form onSubmit={handleSubmit} className="rsvp-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Perferred Name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              What is your email?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="payment" className="form-label">
              Payment
            </label>
            <select
              id="payment"
              name="payment"
              className="form-input"
            >
              <option value="">Select payment option</option>
              <option value="cash">Cash</option>
              <option value="venmo">Venmo</option>
              <option value="cashapp">Cashapp</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="note" className="form-label">
              Leave a note (optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows="3"
              className="form-input"
            ></textarea>
          </div>
          
          <div className="form-group">
            <button
              type="submit"
              className="submit-button"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      </div>
      

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-content">
              <div className="popup-icon">
                <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="popup-title">Thank You!</h3>
              <p className="popup-message">Peace and LOVE!! thank you for the RSVP, you will recive an email to the email you put down! please click the links to venmo or cashapp to send 15$</p>
              <button onClick={closePopup} className="popup-button">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}