import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import WorkflowNode from './WorkflowNode';

const Canvas = () => {
  const [nodes, setNodes] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'WORKFLOW_ITEM',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = document.getElementById('workflow-canvas').getBoundingClientRect();
      
      const position = {
        x: offset.x - canvasRect.left,
        y: offset.y - canvasRect.top,
      };

      addNode(item, position);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addNode = (item, position) => {
    const newNode = {
      id: Date.now(),
      type: item.type,
      label: item.label,
      position,
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <div
      id="workflow-canvas"
      ref={drop}
      className={`flex-1 relative bg-secondary p-4 min-h-full overflow-auto
        ${isOver ? 'bg-opacity-70' : ''}`}
    >
      {nodes.map((node) => (
        <WorkflowNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  );
};

export default Canvas;
