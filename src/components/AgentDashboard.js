import React, { useState } from 'react';
import ChatList from './agent/ChatList';
import ChatWindow from './agent/ChatWindow';
import CustomerProfile from './agent/CustomerProfile';
import ConversationHistory from './agent/ConversationHistory';

const AgentDashboard = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white">
      {/* Chat List Sidebar */}
      <div className="w-[28rem] min-w-[28rem] border-r border-gray-800">
        <ChatList 
          onChatSelect={setActiveChat} 
          activeChat={activeChat}
        />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex">
        {activeChat ? (
          <>
            <div className="flex-1">
              <ChatWindow 
                chat={activeChat}
                onShowHistory={() => setShowHistory(true)}
              />
            </div>
            <div className="w-[28rem] min-w-[28rem] border-l border-gray-800">
              <CustomerProfile customer={activeChat.customer} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-xl font-medium">Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>

      {/* Conversation History Modal */}
      {showHistory && (
        <ConversationHistory
          onClose={() => setShowHistory(false)}
          customerId={activeChat?.customer?.id}
        />
      )}
    </div>
  );
};

export default AgentDashboard;
