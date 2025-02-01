import React from 'react';

const WorkflowNode = ({ node }) => {
  const style = {
    position: 'absolute',
    left: node.position.x,
    top: node.position.y,
  };

  const getNodeContent = () => {
    switch (node.type) {
      case 'message':
        return (
          <div className="bg-dark-gray p-4 rounded-lg w-64">
            <h3 className="font-semibold mb-2">Send Message</h3>
            <textarea
              className="w-full bg-light-gray rounded p-2 text-white"
              placeholder="Enter message..."
              rows="3"
            />
          </div>
        );
      case 'quick_replies':
        return (
          <div className="bg-dark-gray p-4 rounded-lg w-64">
            <h3 className="font-semibold mb-2">Quick Replies</h3>
            <div className="space-y-2">
              <input
                type="text"
                className="w-full bg-light-gray rounded p-2 text-white"
                placeholder="Add reply..."
              />
              <button className="bg-primary text-white px-3 py-1 rounded">
                Add Reply
              </button>
            </div>
          </div>
        );
      case 'condition':
        return (
          <div className="bg-dark-gray p-4 rounded-lg w-64">
            <h3 className="font-semibold mb-2">Condition</h3>
            <select className="w-full bg-light-gray rounded p-2 text-white">
              <option>Select condition...</option>
              <option>If message contains</option>
              <option>If variable equals</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={style} className="cursor-move">
      {getNodeContent()}
    </div>
  );
};

export default WorkflowNode;
