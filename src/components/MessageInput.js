import React from 'react';

function MessageInput() {
  return (
    <div className="bg-dark-gray rounded-lg p-4 w-96">
      <div className="text-lg font-semibold mb-4">Send Message</div>
      <textarea
        className="w-full h-32 bg-light-gray rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        placeholder="Type your message..."
      />
      <div className="mt-4">
        <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
