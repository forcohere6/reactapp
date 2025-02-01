import React from 'react';

function QuickReplies() {
  return (
    <div className="bg-dark-gray rounded-lg p-4 w-64">
      <div className="text-lg font-semibold mb-4">Quick Replies</div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="New reply..."
          className="flex-1 bg-light-gray rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark focus:outline-none">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default QuickReplies;
