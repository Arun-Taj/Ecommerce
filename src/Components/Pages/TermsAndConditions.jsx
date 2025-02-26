import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Link to='/signup'><button><IoMdArrowRoundBack size={30}/></button></Link>
        
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="text-gray-700 mb-4">
          Welcome to our ecommerce website. These terms and conditions outline the rules and regulations for the use of our site.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          By accessing this website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you must not use our website.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content included on this site, including text, graphics, logos, images, and software, is the property of our company or its content suppliers and is protected by international copyright laws.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. User Obligations</h2>
        <p className="text-gray-700 mb-4">
          You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Prohibited behavior includes harassing or causing distress or inconvenience to any person.
        </p>

        <h2 className="text-2xl font-bold mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          We will not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or the inability to use, this website.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Modifications</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to revise these terms and conditions at any time without notice. It is your responsibility to review these terms periodically.
        </p>

        <h2 className="text-2xl font-bold mb-2">6. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company operates.
        </p>

        <p className="text-gray-700">
          If you have any questions or concerns about these terms, please contact us.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
