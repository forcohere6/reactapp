import React, { useState } from 'react';
import './RoleSelector.css'; // Import the CSS file

const RoleCard = ({ title, description, icon, isSelected, onClick }) => (
  <div
    className={`
      p-6 rounded-xl cursor-pointer transition-all duration-200
      ${isSelected ? 'bg-purple-600 ring-2 ring-purple-400' : 'bg-[#1A1A1A] hover:bg-[#242424]'}
    `}
    onClick={onClick}
  >
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-lg ${isSelected ? 'bg-purple-500' : 'bg-[#242424]'}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className={`mt-1 text-sm ${isSelected ? 'text-purple-200' : 'text-gray-400'}`}>
          {description}
        </p>
      </div>
    </div>
  </div>
);

const PreviewSection = ({ role }) => {
  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-16 h-16 mb-6 text-gray-600">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-400 mb-2">Select a Role</h3>
        <p className="text-gray-500">Choose a role to see a preview of the interface</p>
      </div>
    );
  }

  const previews = {
    admin: (
      <div className="h-full flex flex-col">
        <div className="bg-[#1A1A1A] p-4 rounded-t-lg border-b border-gray-800">
          <h3 className="text-white font-medium mb-2">Workflow Editor Preview</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#242424] h-20 rounded-lg animate-pulse"></div>
            <div className="bg-[#242424] h-20 rounded-lg animate-pulse delay-75"></div>
            <div className="bg-[#242424] h-20 rounded-lg animate-pulse delay-150"></div>
          </div>
        </div>
        <div className="flex-1 bg-[#242424] p-4 space-y-4 rounded-b-lg">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
            <div className="h-4 bg-[#1A1A1A] rounded w-32 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-[#1A1A1A] rounded w-full animate-pulse"></div>
            <div className="h-3 bg-[#1A1A1A] rounded w-5/6 animate-pulse delay-75"></div>
            <div className="h-3 bg-[#1A1A1A] rounded w-4/6 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    ),
    agent: (
      <div className="h-full flex flex-col">
        <div className="bg-[#1A1A1A] p-4 rounded-t-lg border-b border-gray-800">
          <h3 className="text-white font-medium mb-2">Agent Dashboard Preview</h3>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[#242424] h-16 rounded-lg animate-pulse"></div>
            <div className="bg-[#242424] h-16 rounded-lg animate-pulse delay-75"></div>
          </div>
        </div>
        <div className="flex-1 bg-[#242424] p-4 space-y-3 rounded-b-lg">
          <div className="flex items-center justify-between bg-[#1A1A1A] p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="h-4 bg-[#242424] rounded w-24 animate-pulse"></div>
            </div>
            <div className="h-4 bg-[#242424] rounded w-16 animate-pulse delay-75"></div>
          </div>
          <div className="flex items-center justify-between bg-[#1A1A1A] p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
              <div className="h-4 bg-[#242424] rounded w-32 animate-pulse"></div>
            </div>
            <div className="h-4 bg-[#242424] rounded w-16 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    ),
  };

  return previews[role];
};

const RoleSelector = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="role-selector-screen bg-[#0A0A0A] flex">
      {/* Left Side - Role Selection */}
      <div className="w-[500px] min-w-[500px] p-12 flex flex-col">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Select Your Role</h2>
          <p className="text-gray-400 text-lg">Choose your role to access the appropriate dashboard</p>
        </div>

        <div className="space-y-4">
          <RoleCard
            title="Admin"
            description="Access workflow editor and manage system configurations"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            isSelected={selectedRole === 'admin'}
            onClick={() => handleRoleSelect('admin')}
          />

          <RoleCard
            title="Agent"
            description="Access agent dashboard and handle customer interactions"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            isSelected={selectedRole === 'agent'}
            onClick={() => handleRoleSelect('agent')}
          />

          <button
            className={`
              mt-8 w-full py-4 rounded-lg font-medium text-lg transition-all duration-200
              ${selectedRole
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }
            `}
            onClick={() => selectedRole && onRoleSelect(selectedRole)}
            disabled={!selectedRole}
          >
            Continue as {selectedRole ? selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1) : '...'}
          </button>
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="flex-1 p-12">
        <div className="bg-[#141414] rounded-xl overflow-hidden h-full shadow-2xl">
          <PreviewSection role={selectedRole} />
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
