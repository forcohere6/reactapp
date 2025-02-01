import React from 'react';
import { Handle, Position } from 'reactflow';

export const ConditionNode = ({ data }) => {
  return (
    <div className="bg-dark-gray p-4 rounded-lg shadow-lg border border-gray-700">
      <Handle type="target" position={Position.Top} />
      <div className="w-64">
        <h3 className="font-semibold mb-2 text-white">Condition</h3>
        <select className="w-full bg-light-gray rounded p-2 text-white mb-2">
          <option>If message contains</option>
          <option>If variable equals</option>
          <option>If user input matches</option>
        </select>
        <input
          type="text"
          className="w-full bg-light-gray rounded p-2 text-white"
          placeholder="Enter condition value..."
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="true" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ left: '75%' }}
      />
    </div>
  );
};
