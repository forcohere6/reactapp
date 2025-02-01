import React from 'react';

function ComponentPanel() {
  const components = [
    { name: 'Text', icon: 'T' },
    { name: 'Quick Replies', icon: 'Q' },
    { name: 'Image', icon: '🖼️' },
    { name: 'Buttons', icon: '⚪' },
    { name: 'Custom Payload', icon: '📦' }
  ];

  return (
    <div className="bg-dark-gray rounded-lg p-4 w-64">
      <div className="text-lg font-semibold mb-4">Add Components</div>
      <div className="space-y-2">
        {components.map((component) => (
          <button
            key={component.name}
            className="w-full bg-light-gray text-white py-2 px-4 rounded-lg hover:bg-gray-600 focus:outline-none text-left"
          >
            {component.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ComponentPanel;
