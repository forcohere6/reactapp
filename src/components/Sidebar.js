import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon, text, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink
      to={to}
      className={`
        flex items-center px-4 py-2 cursor-pointer
        ${isActive ? 'bg-primary text-white rounded-lg mx-2' : 'text-gray-400 hover:text-white'}
      `}
    >
      <span className="w-5 h-5 flex items-center justify-center">{icon}</span>
      <span className="ml-3 text-sm">{text}</span>
    </NavLink>
  );
};

const SidebarSection = ({ title }) => (
  <div className="px-4 py-2">
    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</span>
  </div>
);

function Sidebar() {
  return (
    <div className="w-48 bg-[#0F0F0F] h-screen border-r border-gray-800">
      {/* Agent Section */}
      <div className="px-4 py-4">
        <h2 className="text-white text-lg font-medium">Agent</h2>
      </div>

      <div className="space-y-1">
        <SidebarSection title="Build" />
        
        {/* Workflow */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          text="Workflow"
          to="/workflow"
        />

        {/* Knowledge */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
          text="Knowledge"
          to="/knowledge"
        />

        <SidebarSection title="Content" />
        
        {/* Messages */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          }
          text="Messages"
          to="/messages"
        />

        {/* Components */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          }
          text="Components"
          to="/components"
        />

        {/* Variables */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          }
          text="Variables"
          to="/variables"
        />

        {/* Functions */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          }
          text="Functions"
          to="/functions"
        />

        <SidebarSection title="Natural Language" />
        
        {/* Intent */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          }
          text="Intent"
          to="/intent"
        />

        {/* Entities */}
        <SidebarItem
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          }
          text="Entities"
          to="/entities"
        />
      </div>
    </div>
  );
}

export default Sidebar;
