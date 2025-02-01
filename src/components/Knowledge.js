import React, { useState } from 'react';

const TabButton = ({ label, icon, isActive, onClick }) => (
  <button
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-150
      ${isActive ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [inputText, setInputText] = useState('');

  const tabs = [
    {
      id: 'text',
      label: 'Text',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      ),
    },
    {
      id: 'json',
      label: 'JSON',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'file',
      label: 'File',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'url',
      label: 'URL',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      id: 'notion',
      label: 'Notion',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Submitted:', inputText);
  };

  return (
    <div className="flex-1 bg-secondary p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Knowledge Input</h1>
          <p className="text-gray-400">Select a data source type and input your data to train the chatbot.</p>
        </div>

        {/* Input Type Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-dark-gray rounded-lg p-4">
            <label className="block text-gray-400 mb-2">Enter your text data:</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-48 bg-[#1A1A1A] text-white rounded-lg p-4 border border-gray-700 
                focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              placeholder="Enter your text here..."
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-purple-700 
              transition-colors duration-150"
          >
            Submit Text
          </button>
        </form>

        <div className="mt-6 text-gray-400">
          <p>Provide knowledge to your chatbot using any of the above data sources.</p>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
