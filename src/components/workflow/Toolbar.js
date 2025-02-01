import React from 'react';

const workflowComponents = [
  {
    type: 'messageNode',
    label: 'Send Message',
    icon: '💬',
  },
  {
    type: 'quickRepliesNode',
    label: 'Quick Replies',
    icon: '📝',
  },
  {
    type: 'conditionNode',
    label: 'Conditions',
    icon: '⚡',
  },
];

const Toolbar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-64 bg-secondary border-r border-dark-gray p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Components</h2>
      <div className="space-y-2">
        {workflowComponents.map((component) => (
          <div
            key={component.type}
            className="flex items-center space-x-2 p-3 bg-dark-gray rounded-lg cursor-move
              hover:bg-gray-600 transition-all duration-200"
            draggable
            onDragStart={(event) => onDragStart(event, component.type)}
          >
            <span className="text-xl">{component.icon}</span>
            <span className="text-white">{component.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
