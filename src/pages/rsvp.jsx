import Logo from "./componets/logo"
import { useState } from 'react';

export default function Rsvp() {
  const [showPopup, setShowPopup] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="bg-gray-100  w-full px-4 py-6 formbox">
      {/* <Logo/> */}
      
      <div className="w-full max-w-md mx-auto mt-6 p-4 sm:p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center text-gray-800">Event RSVP</h1>
        <p className="text-center mb-4 sm:mb-6 text-gray-700">Please join us on <strong>May 3rd, 2025 at 6:00 PM</strong></p>
        
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
              What is your name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 text-base"
            />
          </div>
          
          <div>
            <label htmlFor="pronouns" className="block text-sm font-medium text-gray-800 mb-1">
              Preferred pronouns?
            </label>
            <input
              type="text"
              id="pronouns"
              name="pronouns"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 text-base"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
              What is your email?
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 text-base"
            />
          </div>
          
          <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-800 mb-1">
              Payment
            </label>
            <select
              id="payment"
              name="payment"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 text-base"
            >
              <option value="">Select payment option</option>
              <option value="cash">Cash</option>
              <option value="venmo">Venmo</option>
              <option value="cashapp">Cashapp</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-800 mb-1">
              Leave a note (optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 text-base"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-base font-medium"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      </div>
      
      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-700 mb-4">Peace and LOVE!! thank you for the RSVP, you will recive an email to the email you put down! please click the links to venmo or cashapp to send 15$</p>
              <button
                onClick={closePopup}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}