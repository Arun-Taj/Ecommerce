import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> <fieldset className="mb-6 border border-gray-300 p-4">
        {/* Fieldset with SignUp header */}
        
          <legend className="text-3xl font-bold text-gray-700">Sign Up</legend>
       
        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Username"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>
        
        {/* Sign Up Button */}
        <button className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
          Login
        </button>
        {/* Link to Login */}
        <p className="mt-4 text-center text-gray-600">
          Doesn't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-bold hover:underline">
            Signup
          </Link>
        </p>
      </fieldset></div> 
    </div>
  );
};

export default Login;
