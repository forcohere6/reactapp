import React, { useState } from 'react';

const ConversationHistory = ({ onClose, customerId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all'); // all, today, week, month

  // Dummy data - replace with real data from your backend
  const conversations = [
    {
      id: 1,
      date: new Date(Date.now() - 86400000), // 1 day ago
      agent: 'Jane Doe',
      duration: '15m',
      status: 'resolved',
      summary: 'Account settings and password reset assistance',
    },
    {
      id: 2,
      date: new Date(Date.now() - 172800000), // 2 days ago
      agent: 'Mike Johnson',
      duration: '8m',
      status: 'resolved',
      summary: 'Product inquiry and feature explanation',
    },
    // Add more conversation history items as needed
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.agent.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;

    const now = new Date();
    const convDate = new Date(conv.date);
    
    switch (dateFilter) {
      case 'today':
        return convDate.toDateString() === now.toDateString();
      case 'week':
        const weekAgo = new Date(now.setDate(now.getDate() - 7));
        return convDate >= weekAgo;
      case 'month':
        const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
        return convDate >= monthAgo;
      default:
        return true;
    }
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#0A0A0A] rounded-xl w-full max-w-4xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Conversation History</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search conversations..."
                className="w-full bg-[#1A1A1A] text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-[#1A1A1A] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className="bg-[#1A1A1A] rounded-lg p-4 hover:bg-[#242424] transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">{conv.agent}</span>
                    <span className="text-sm text-gray-400">
                      {conv.date.toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400">{conv.duration}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs capitalize ${
                        conv.status === 'resolved'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}
                    >
                      {conv.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400">{conv.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationHistory;
