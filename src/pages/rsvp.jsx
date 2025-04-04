import Navbar from "./componets/nav-bar"

export default function Rsvp() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <main className=" bg-gray-100">
      <Navbar />
      
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md formbox">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Event RSVP</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
              What is your name?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            />
          </div>
          
          {/* <div>
            <label htmlFor="payment" className="block text-sm font-medium text-gray-800 mb-1">
              Payment
            </label>
            <select
              id="payment"
              name="payment"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            >
              <option value="">Select payment option</option>
              <option value="cash">Cash</option>
              <option value="venmo">Venmo</option>
              <option value="paypal">PayPal</option>
              <option value="free">Free Entry</option>
            </select>
          </div> */}
          
          <div>
            <label htmlFor="note" className="block text-sm font-medium text-gray-800 mb-1">
              Leave a note (optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800"
            ></textarea>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit RSVP
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}