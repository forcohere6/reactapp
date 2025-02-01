import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const QuickRepliesNode = ({ data }) => {
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');

  const addReply = () => {
    if (newReply.trim()) {
      setReplies([...replies, newReply.trim()]);
      setNewReply('');
    }
  };

  return (
    <div className="bg-dark-gray p-4 rounded-lg shadow-lg border border-gray-700">
      <Handle type="target" position={Position.Top} />
      <div className="w-64">
        <h3 className="font-semibold mb-2 text-white">Quick Replies</h3>
        <div className="space-y-2">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="flex-1 bg-light-gray rounded p-2 text-white"
              placeholder="Add reply..."
            />
            <button
              onClick={addReply}
              className="bg-primary text-white px-3 py-1 rounded hover:bg-primary-dark"
            >
              +
            </button>
          </div>
          <div className="space-y-1">
            {replies.map((reply, index) => (
              <div
                key={index}
                className="bg-light-gray rounded p-2 text-white flex justify-between items-center"
              >
                <span>{reply}</span>
                <button
                  onClick={() => setReplies(replies.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
