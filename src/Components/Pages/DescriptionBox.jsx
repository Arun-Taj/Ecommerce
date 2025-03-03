import React, { useState } from 'react';

const DescriptionBox = () => {
  // Optional state if you want to switch between tabs later
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="container mx-auto my-16 px-4 max-w-3xl bg-white shadow rounded-lg p-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`py-2 px-4 font-semibold focus:outline-none transition-colors ${
            activeTab === 'description'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`ml-6 py-2 px-4 font-semibold focus:outline-none transition-colors ${
            activeTab === 'reviews'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (12)
        </button>
      </div>
      {/* Content */}
      <div className="mt-6 text-gray-700 space-y-4">
        {activeTab === 'description' && (
          <>
            <p>
              E-commerce, short for electronic commerce, refers to the buying and selling of goods and services via digital networks—most notably the Internet. It encompasses various models such as business-to-consumer (B2C), where online retailers sell directly to consumers; business-to-business (B2B), which involves transactions between companies; and even consumer-to-consumer (C2C) platforms that facilitate person-to-person sales.
            </p>
            <p>
              In short, e-commerce is the process of buying and selling goods or services online using digital technology. It allows people to shop online, make secure payments, and have products delivered directly to their door.
            </p>
          </>
        )}
        {activeTab === 'reviews' && (
          <p className="text-center text-gray-500">Reviews functionality coming soon...</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
