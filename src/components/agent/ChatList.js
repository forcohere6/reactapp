import React, { useState } from 'react';

const ChatList = ({ onChatSelect, activeChat }) => {
  const [filter, setFilter] = useState('all'); // all, active, pending, resolved

  // Dummy data - replace with real data from your backend
  const chats = [
    {
      id: 1,
      customer: {
        id: 101,
        name: 'John Smith',
        avatar: 'JS'
      },
      lastMessage: "I'm having trouble with my account settings. Can you help me?",
      timestamp: new Date(Date.now() - 120000), // 2 minutes ago
      status: 'active',
      unread: 2
    },
    {
      id: 2,
      customer: {
        id: 102,
        name: 'Sarah Johnson',
        avatar: 'SJ'
      },
      lastMessage: 'Thank you for your help with the product selection.',
      timestamp: new Date(Date.now() - 300000), // 5 minutes ago
      status: 'active',
      unread: 0
    },
    // Add more chat items as needed
  ];

  const formatTime = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const filteredChats = chats.filter(chat => {
    if (filter === 'all') return true;
    return chat.status === filter;
  });

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-lg font-semibold mb-4">Conversations</h2>
        <div className="relative">
          <input
            type="text"
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
      </div>

      {/* Filters */}
      <div className="flex p-4 space-x-2 border-b border-gray-800">
        {['all', 'active', 'pending', 'resolved'].map((f) => (
          <button
            key={f}
            className={`px-3 py-1 rounded-full text-sm capitalize ${
              filter === f
                ? 'bg-purple-600 text-white'
                : 'bg-[#1A1A1A] text-gray-400 hover:bg-[#242424]'
            }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 border-b border-gray-800 cursor-pointer transition-colors duration-200 
              ${activeChat?.id === chat.id ? 'bg-[#242424]' : 'hover:bg-[#1A1A1A]'}`}
            onClick={() => onChatSelect(chat)}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                  {chat.customer.avatar}
                </div>
                {chat.status === 'active' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0A0A0A]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-white truncate">
                    {chat.customer.name}
                  </h3>
                  <span className="text-xs text-gray-400">
                    {formatTime(chat.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{chat.unread}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
