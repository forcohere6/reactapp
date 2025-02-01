import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Title, TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";

const MetricCard = ({ title, value, change, icon }) => (
  <div className="bg-[#1A1A1A] rounded-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-400">{title}</span>
      <span className="text-gray-400">{icon}</span>
    </div>
    <div className="text-3xl font-semibold text-white mb-2">{value}</div>
    <div className={`text-sm flex items-center ${
      change.startsWith('+') ? 'text-green-500' : 'text-red-500'
    }`}>
      {change.startsWith('+') ? (
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ) : (
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
        </svg>
      )}
      {change}
    </div>
  </div>
);

const AgentAnalytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('conversations');

  // Dummy data - replace with real data from your backend
  const chatData = [
    { date: 'Mon', conversations: 23, responseTime: 1.2, satisfaction: 4.5 },
    { date: 'Tue', conversations: 28, responseTime: 1.5, satisfaction: 4.3 },
    { date: 'Wed', conversations: 25, responseTime: 1.1, satisfaction: 4.7 },
    { date: 'Thu', conversations: 32, responseTime: 1.3, satisfaction: 4.6 },
    { date: 'Fri', conversations: 30, responseTime: 1.4, satisfaction: 4.4 },
    { date: 'Sat', conversations: 20, responseTime: 1.0, satisfaction: 4.8 },
    { date: 'Sun', conversations: 15, responseTime: 0.9, satisfaction: 4.9 },
  ];

  const metrics = {
    conversations: {
      label: 'Conversations',
      color: '#8B5CF6',
      format: (value) => value,
    },
    responseTime: {
      label: 'Avg. Response Time (min)',
      color: '#10B981',
      format: (value) => value.toFixed(1),
    },
    satisfaction: {
      label: 'Customer Satisfaction',
      color: '#F59E0B',
      format: (value) => value.toFixed(1),
    },
  };

  return (
    <div className="flex-1 bg-[#0A0A0A] p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-400">Track your performance and customer satisfaction</p>
          </div>
          <div className="flex items-center space-x-2">
            {['day', 'week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  timeRange === range
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:bg-[#1A1A1A] hover:text-white'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Conversations"
            value="153"
            change="+12% vs last week"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
          />
          <MetricCard
            title="Avg. Response Time"
            value="1.3m"
            change="-30s vs average"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <MetricCard
            title="Resolution Rate"
            value="94%"
            change="+2% vs last month"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <MetricCard
            title="Customer Satisfaction"
            value="4.8"
            change="+0.3 vs last month"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Charts */}
        <div className="space-y-6">
          {/* Main Chart */}
          <Card className="bg-[#1A1A1A] border-0">
            <div className="flex items-center justify-between mb-6">
              <Title className="text-white">Performance Metrics</Title>
              <div className="flex space-x-2">
                {Object.entries(metrics).map(([key, { label, color }]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMetric(key)}
                    className={`px-3 py-1 rounded-lg text-sm transition-colors duration-200 ${
                      selectedMetric === key
                        ? 'bg-opacity-20 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    style={{ backgroundColor: selectedMetric === key ? color : 'transparent' }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chatData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={metrics[selectedMetric].color} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={metrics[selectedMetric].color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D2D2D" />
                  <XAxis dataKey="date" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A1A', border: 'none' }}
                    labelStyle={{ color: '#6B7280' }}
                  />
                  <Area
                    type="monotone"
                    dataKey={selectedMetric}
                    stroke={metrics[selectedMetric].color}
                    fill="url(#colorMetric)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[#1A1A1A] border-0">
              <Title className="text-white mb-4">Conversation Distribution</Title>
              <div className="space-y-4">
                {[
                  { label: 'Account Issues', value: 35, color: '#8B5CF6' },
                  { label: 'Product Inquiries', value: 28, color: '#10B981' },
                  { label: 'Technical Support', value: 22, color: '#F59E0B' },
                  { label: 'Billing Questions', value: 15, color: '#EF4444' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-white">{item.value}%</span>
                      </div>
                      <div className="w-full bg-[#2D2D2D] rounded-full h-2">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-[#1A1A1A] border-0">
              <Title className="text-white mb-4">Recent Performance</Title>
              <div className="space-y-4">
                {[
                  {
                    label: 'Response Time Trend',
                    value: 'Improving',
                    change: '-15%',
                    color: 'text-green-500',
                  },
                  {
                    label: 'Customer Feedback',
                    value: 'Very Positive',
                    change: '+8%',
                    color: 'text-green-500',
                  },
                  {
                    label: 'Resolution Rate',
                    value: 'Above Target',
                    change: '+5%',
                    color: 'text-green-500',
                  },
                  {
                    label: 'Workload Balance',
                    value: 'Optimal',
                    change: '0%',
                    color: 'text-gray-400',
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4 bg-[#2D2D2D] rounded-lg">
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                    <span className={`${item.color} text-sm`}>{item.change}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentAnalytics;
