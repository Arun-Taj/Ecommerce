import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-200">
      {/* Fieldset with Login header at the top left */}
      <fieldset className="mb-6 border border-gray-500 px-4 py-8 bg-sky-200 rounded-3xl  justify-items-center">
        <legend className="text-3xl font-bold">Login</legend>

        {/* Form inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full border border-blue-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-blue-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Login button */}
        <button className="flex justify-center items-center px-10 rounded-full mt-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
          Login
        </button>
        {/* Sign up link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?
          <Link to={"/signup"}>
            <span className="text-blue-600 cursor-pointer font-bold">
              Sign Up
            </span>
          </Link>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
