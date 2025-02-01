import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ type, icon, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WORKFLOW_ITEM',
    item: { type, label },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`flex items-center space-x-2 p-3 bg-dark-gray rounded-lg cursor-move mb-2 
        ${isDragging ? 'opacity-50' : 'opacity-100'} 
        hover:bg-gray-600 transition-all duration-200`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default DraggableComponent;
