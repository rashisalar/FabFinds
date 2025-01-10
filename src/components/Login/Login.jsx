import React, { useState } from "react";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const toggleState = () => {
    setCurrState((prevState) => (prevState === "Sign Up" ? "Login" : "Sign Up"));
    setFormData({ name: "", email: "", password: "" }); // Clear form fields when toggling
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add custom validation or submission logic here
    if (!formData.email || !formData.password || (currState === "Sign Up" && !formData.name)) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log("Form submitted:", formData);
    setShowLogin(false); // Close modal on successful submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-sm space-y-4"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Title and Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{currState}</h2>
          <button
            type="button"
            aria-label="Close"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            onClick={() => setShowLogin(false)}
          >
            &times;
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            aria-label="Your Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded-md transition-all duration-200"
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        {currState === "Sign Up" && (
          <div className="flex items-start space-x-2 text-sm">
            <input
              type="checkbox"
              required
              aria-label="Accept Terms and Conditions"
              className="w-4 h-4 mt-1 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            />
            <p className="text-gray-600 dark:text-gray-400">
              By continuing, I agree to the{" "}
              <span className="text-primary cursor-pointer">Terms of Use</span> &{" "}
              <span className="text-primary cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        )}

        {/* Toggle Between Login and Sign Up */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          {currState === "Login" ? (
            <>
              Create a new account?{" "}
              <span onClick={toggleState} className="text-primary cursor-pointer">
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={toggleState} className="text-primary cursor-pointer">
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
