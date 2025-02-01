import React from 'react';
import { Handle, Position } from 'reactflow';

export const MessageNode = ({ data }) => {
  return (
    <div className="bg-dark-gray p-4 rounded-lg shadow-lg border border-gray-700">
      <Handle type="target" position={Position.Top} />
      <div className="w-64">
        <h3 className="font-semibold mb-2 text-white">Send Message</h3>
        <textarea
          className="w-full bg-light-gray rounded p-2 text-white resize-none"
          placeholder="Enter message..."
          rows="3"
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
