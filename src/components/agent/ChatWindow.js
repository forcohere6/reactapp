import React, { useState, useRef, useEffect } from 'react';

const Message = ({ message, isAgent }) => (
  <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-[70%] rounded-lg px-4 py-2 ${
        isAgent
          ? 'bg-purple-600 text-white'
          : 'bg-[#1A1A1A] text-white'
      }`}
    >
      <p>{message.content}</p>
      <span className="text-xs opacity-70 mt-1 block">
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  </div>
);

const ChatWindow = ({ chat, onShowHistory }) => {
  const [message, setMessage] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const messagesEndRef = useRef(null);

  // Dummy data - replace with real messages from your backend
  const messages = [
    {
      id: 1,
      content: "Hello! I'm having trouble with my account settings.",
      timestamp: new Date(Date.now() - 300000),
      isAgent: false,
    },
    {
      id: 2,
      content: "I'd be happy to help you with that. What specific issue are you experiencing?",
      timestamp: new Date(Date.now() - 240000),
      isAgent: true,
    },
    // Add more messages as needed
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add message sending logic here
    console.log('Sending message:', message);
    setMessage('');
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Add file upload logic here
    console.log('Uploading file:', file);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
            {chat.customer.avatar}
          </div>
          <div>
            <h3 className="font-medium text-white">{chat.customer.name}</h3>
            <span className="text-sm text-gray-400">Active now</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onShowHistory}
            className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors duration-200"
            title="View History"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button
            onClick={() => setShowTransferModal(true)}
            className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors duration-200"
            title="Transfer Chat"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} isAgent={msg.isAgent} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-800">
        <form onSubmit={handleSend} className="flex items-center space-x-4">
          <label className="p-2 hover:bg-[#1A1A1A] rounded-lg cursor-pointer transition-colors duration-200">
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*,.pdf,.doc,.docx"
            />
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              message.trim()
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-[#1A1A1A] text-gray-400'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </form>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#1A1A1A] rounded-lg p-6 w-96">
            <h3 className="text-lg font-medium text-white mb-4">Transfer Chat</h3>
            <select className="w-full bg-[#242424] text-white rounded-lg px-4 py-2 mb-4">
              <option value="">Select an agent...</option>
              <option value="1">Jane Smith</option>
              <option value="2">Mike Johnson</option>
              <option value="3">Sarah Wilson</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowTransferModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Add transfer logic here
                  setShowTransferModal(false);
                }}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
