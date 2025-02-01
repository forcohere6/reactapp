import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ icon, label, to, isActive, badge }) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 group relative ${
      isActive 
        ? 'bg-purple-600 text-white' 
        : 'text-gray-400 hover:bg-[#1A1A1A] hover:text-white'
    }`}
  >
    <div className="w-6 h-6 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-sm font-medium">{label}</span>
    {badge && (
      <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </Link>
);

const AgentOuterSidebar = () => {
  const location = useLocation();
  const [unreadChats] = useState(5);
  const [onlineStatus, setOnlineStatus] = useState('online');

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-[#0A0A0A] border-r border-gray-800 flex flex-col">
      {/* Agent Profile Section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-semibold">A</span>
            </div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0A0A0A] ${
              onlineStatus === 'online' ? 'bg-green-500' : 'bg-yellow-500'
            }`} />
          </div>
          <div>
            <h3 className="text-white font-medium">Agent Name</h3>
            <div className="flex items-center space-x-1">
              <select
                value={onlineStatus}
                onChange={(e) => setOnlineStatus(e.target.value)}
                className="text-xs bg-transparent text-gray-400 focus:outline-none cursor-pointer"
              >
                <option value="online">🟢 Online</option>
                <option value="away">🟡 Away</option>
                <option value="busy">🔴 Busy</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 space-y-1 px-2">
        <NavItem
          to="/agent/dashboard"
          isActive={isCurrentPath('/agent/dashboard')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          }
          label="Dashboard"
        />

        <NavItem
          to="/agent/chats"
          isActive={isCurrentPath('/agent/chats')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          }
          label="Active Chats"
          badge={unreadChats}
        />

        <NavItem
          to="/agent/customers"
          isActive={isCurrentPath('/agent/customers')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
          label="Customers"
        />

        <NavItem
          to="/agent/analytics"
          isActive={isCurrentPath('/agent/analytics')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
          label="Analytics"
        />

        <NavItem
          to="/agent/knowledge"
          isActive={isCurrentPath('/agent/knowledge')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
          label="Knowledge Base"
        />

        <NavItem
          to="/agent/templates"
          isActive={isCurrentPath('/agent/templates')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          }
          label="Templates"
        />
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-800">
        <NavItem
          to="/agent/settings"
          isActive={isCurrentPath('/agent/settings')}
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          label="Settings"
        />
      </div>
    </div>
  );
};

export default AgentOuterSidebar;