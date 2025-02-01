import React, { useState } from 'react';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
      active 
        ? 'text-white border-b-2 border-purple-600' 
        : 'text-gray-400 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const AgentRow = ({ agent, onStatusChange }) => (
  <div className="flex items-center justify-between py-4 px-4 hover:bg-[#1A1A1A] rounded-lg transition-colors duration-200">
    <div className="flex items-center space-x-4">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 bg-[#1A1A1A]"
      />
      <div className="flex items-center space-x-3">
        <div className="relative">
          {agent.avatar ? (
            <img 
              src={agent.avatar} 
              alt={agent.name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {agent.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0A0A0A] ${
            agent.status === 'online' ? 'bg-green-500' :
            agent.status === 'offline' ? 'bg-gray-500' :
            'bg-yellow-500'
          }`} />
        </div>
        <div>
          <h3 className="text-white font-medium">{agent.name}</h3>
          <p className="text-gray-400 text-sm">{agent.email}</p>
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-6">
      <span className={`px-3 py-1 text-sm rounded-full ${
        agent.role === 'Admin' ? 'bg-purple-600/20 text-purple-400' :
        agent.role === 'Owner' ? 'bg-blue-600/20 text-blue-400' :
        'bg-gray-600/20 text-gray-400'
      }`}>
        {agent.role}
      </span>

      <div className="relative">
        <select
          value={agent.acceptingChats}
          onChange={(e) => onStatusChange(agent.id, e.target.value)}
          className="appearance-none bg-transparent text-sm pl-6 pr-8 py-1 border border-gray-700 rounded-full focus:outline-none focus:border-purple-600 cursor-pointer"
          style={{ color: 
            agent.acceptingChats === 'accepting' ? '#10B981' :
            agent.acceptingChats === 'not-accepting' ? '#EF4444' :
            '#6B7280'
          }}
        >
          <option value="accepting">Accepting chats</option>
          <option value="not-accepting">Not accepting chats</option>
          <option value="offline">Offline</option>
        </select>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: 
            agent.acceptingChats === 'accepting' ? '#10B981' :
            agent.acceptingChats === 'not-accepting' ? '#EF4444' :
            '#6B7280'
          }}
        />
      </div>
    </div>
  </div>
);

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState('agents');
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data - replace with your actual data
  const [agents] = useState([
    {
      id: 1,
      name: 'Michaela Gentry',
      email: 'm.gentry@mail.com',
      role: 'Admin',
      status: 'online',
      acceptingChats: 'accepting'
    },
    {
      id: 2,
      name: 'Leah Lane',
      email: 'l.lane@mail.com',
      role: 'Owner',
      status: 'online',
      acceptingChats: 'accepting'
    },
    {
      id: 3,
      name: 'Pablo Burgess',
      email: 'p.burgess@mail.com',
      role: 'Admin',
      status: 'online',
      acceptingChats: 'accepting'
    },
    {
      id: 4,
      name: 'Edwin Boyer',
      email: 'e.boyer@mail.com',
      role: 'Agent',
      status: 'online',
      acceptingChats: 'not-accepting'
    },
    {
      id: 5,
      name: 'Farrah Carney',
      email: 'f.carney@mail.com',
      role: 'Agent',
      status: 'offline',
      acceptingChats: 'offline'
    }
  ]);

  const handleStatusChange = (agentId, newStatus) => {
    // Implement status change logic here
    console.log(`Changing status for agent ${agentId} to ${newStatus}`);
  };

  return (
    <div className="flex-1 bg-[#0A0A0A] overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-white">Team</h1>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Invite agents</span>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <TabButton 
                active={activeTab === 'agents'} 
                onClick={() => setActiveTab('agents')}
              >
                Agents
              </TabButton>
              <TabButton 
                active={activeTab === 'chatbots'} 
                onClick={() => setActiveTab('chatbots')}
              >
                Chatbots
              </TabButton>
              <TabButton 
                active={activeTab === 'groups'} 
                onClick={() => setActiveTab('groups')}
              >
                Groups
              </TabButton>
              <TabButton 
                active={activeTab === 'suspended'} 
                onClick={() => setActiveTab('suspended')}
              >
                Suspended agents
              </TabButton>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search agent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-[#1A1A1A] text-white rounded-lg border border-gray-800 focus:outline-none focus:border-purple-600 pl-10"
              />
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" 
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
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-[#111111] rounded-xl border border-gray-800">
            <div className="py-4">
              <div className="flex items-center space-x-3 px-4 py-2 text-gray-400 text-sm">
                <span className="w-4"></span>
                <span className="flex-1">Name</span>
                <span className="w-24">Role</span>
                <span className="w-40">Status</span>
              </div>

              {agents.map(agent => (
                <AgentRow 
                  key={agent.id} 
                  agent={agent} 
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
