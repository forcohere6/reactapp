import React, { useState, useRef, useEffect } from 'react';

const Message = ({ content, isBot, timestamp }) => (
  <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
    <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
      isBot 
        ? 'bg-[#1A1A1A] text-white rounded-tl-sm' 
        : 'bg-purple-600 text-white rounded-tr-sm'
    }`}>
      <p className="text-sm">{content}</p>
      <span className="text-xs opacity-70 mt-1 block">
        {new Date(timestamp).toLocaleTimeString()}
      </span>
    </div>
  </div>
);

const ChatModal = ({ isOpen, onClose, workflowResponse }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);
  const modalRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (workflowResponse) {
      setMessages(prev => [...prev, {
        content: workflowResponse,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  }, [workflowResponse]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, {
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    }]);
    setInputMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <div
        ref={modalRef}
        className={`bg-[#0A0A0A] rounded-2xl shadow-lg border border-gray-800 overflow-hidden transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-[600px]'
        }`}
        style={{ width: '400px' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#1A1A1A]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-white">Workflow Assistant</h3>
              <span className="text-xs text-green-500">Online</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMinimized ? "M12 4v16m8-8H4" : "M20 12H4"} />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#2D2D2D] rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4" style={{ height: 'calc(600px - 130px)' }}>
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                  <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="text-sm">No messages yet. Start a conversation!</p>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <Message key={index} {...msg} />
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-800">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#1A1A1A] text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    inputMessage.trim()
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'bg-[#1A1A1A] text-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatModal;
