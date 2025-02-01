import React from 'react';

const StatCard = ({ title, value, change, icon }) => (
  <div className="bg-[#1A1A1A] rounded-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-400">{title}</span>
      <span className="text-gray-400">{icon}</span>
    </div>
    <div className="text-3xl font-semibold text-white mb-2">{value}</div>
    <div className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
      {change}
    </div>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-[#1A1A1A] rounded-lg p-6">
    <h3 className="text-white text-lg font-medium mb-4">{title}</h3>
    {children}
  </div>
);

const TableRow = ({ customer, topic, duration, status }) => (
  <tr className="border-b border-gray-800">
    <td className="py-4 pr-4">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm">{customer.charAt(0)}</span>
        </div>
        <span className="text-white">{customer}</span>
      </div>
    </td>
    <td className="py-4 px-4 text-gray-400">{topic}</td>
    <td className="py-4 px-4 text-gray-400">{duration}</td>
    <td className="py-4 pl-4">
      <span className={`px-3 py-1 rounded-full text-sm
        ${status === 'Completed' ? 'bg-green-500/20 text-green-500' : 
          status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' : 
          'bg-yellow-500/20 text-yellow-500'}`}>
        {status}
      </span>
    </td>
  </tr>
);

const Analytics = () => {
  return (
    <div className="flex-1 bg-[#0A0A0A] p-8 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-1">Analytics Dashboard</h1>
          <p className="text-gray-400">Monitor your chatbot's performance and user interactions</p>
        </div>
        <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-white">Available</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Chats"
          value="1,234"
          change="+20.1% from last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>}
        />
        <StatCard
          title="Avg. Response Time"
          value="2m 30s"
          change="-10% from last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}
        />
        <StatCard
          title="Customer Satisfaction"
          value="92%"
          change="+5% from last month"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>}
        />
        <StatCard
          title="Active Users"
          value="573"
          change="+20 since last hour"
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <ChartCard title="Chat Volume Trend">
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart: Chat volume over time
          </div>
        </ChartCard>
        <ChartCard title="Response Time Distribution">
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart: Response time distribution
          </div>
        </ChartCard>
      </div>

      {/* Recent Chats Table */}
      <div className="bg-[#1A1A1A] rounded-lg p-6">
        <h3 className="text-white text-lg font-medium mb-6">Recent Chats</h3>
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-left">
              <th className="pb-4 pr-4">Customer</th>
              <th className="pb-4 px-4">Topic</th>
              <th className="pb-4 px-4">Duration</th>
              <th className="pb-4 pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              customer="John Smith"
              topic="Account Setup"
              duration="5m 23s"
              status="Completed"
            />
            <TableRow
              customer="Sarah Johnson"
              topic="Billing Issue"
              duration="2m 10s"
              status="In Progress"
            />
            <TableRow
              customer="Mike Brown"
              topic="Product Query"
              duration="8m 45s"
              status="Pending"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
