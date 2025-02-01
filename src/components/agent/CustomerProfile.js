import React, { useState } from 'react';

const InfoItem = ({ label, value }) => (
  <div className="mb-6">
    <label className="text-sm text-gray-400 block mb-1">{label}</label>
    <p className="text-white text-base font-medium">{value}</p>
  </div>
);

const CustomerProfile = ({ customer }) => {
  const [note, setNote] = useState('');
  const [activeTab, setActiveTab] = useState('info');

  // Dummy data - replace with real data from your backend
  const customerData = {
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    joinDate: '2024-01-01',
    totalChats: 5,
    lastActive: '2025-01-05',
    notes: [
      {
        id: 1,
        text: 'Customer prefers email communication',
        timestamp: '2025-01-04T10:30:00',
        agent: 'Jane Doe'
      }
    ]
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    console.log('Adding note:', note);
    setNote('');
  };

  return (
    <div className="h-full flex flex-col bg-[#0A0A0A]">
      {/* Header with Customer Info */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Customer Profile</h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Customer Avatar and Status */}
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl text-white font-semibold">
              {customer?.name?.[0] || 'JS'}
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0A0A0A]" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white">{customer?.name || 'John Smith'}</h3>
            <span className="text-sm text-green-500">Active now</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1">
          {['info', 'history', 'notes'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:bg-[#1A1A1A] hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'info' && (
          <div className="p-6">
            <div className="grid grid-cols-1 gap-2">
              <InfoItem label="Email" value={customerData.email} />
              <InfoItem label="Phone" value={customerData.phone} />
              <InfoItem label="Location" value={customerData.location} />
              <InfoItem 
                label="Member Since" 
                value={new Date(customerData.joinDate).toLocaleDateString()} 
              />
              <div className="flex space-x-6">
                <InfoItem 
                  label="Total Chats" 
                  value={customerData.totalChats} 
                />
                <InfoItem 
                  label="Last Active" 
                  value={new Date(customerData.lastActive).toLocaleDateString()} 
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Previous Chat</span>
                  <span className="text-sm text-gray-400">Jan 4, 2025</span>
                </div>
                <p className="text-gray-400 text-sm">Product inquiry and feature explanation</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="p-6">
            <form onSubmit={handleAddNote} className="mb-6">
              <div className="relative">
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add a note about this customer..."
                  className="w-full bg-[#1A1A1A] text-white rounded-lg p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                  rows="3"
                />
                <button
                  type="submit"
                  disabled={!note.trim()}
                  className={`absolute right-2 bottom-2 p-2 rounded-lg ${
                    note.trim()
                      ? 'text-purple-600 hover:bg-purple-600/10'
                      : 'text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {customerData.notes.map((note) => (
                <div key={note.id} className="bg-[#1A1A1A] rounded-lg p-4">
                  <p className="text-white mb-3">{note.text}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-500">{note.agent}</span>
                    <span className="text-gray-400">
                      {new Date(note.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
