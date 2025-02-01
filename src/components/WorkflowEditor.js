import React, { useState, useCallback } from 'react';
import ReactFlow, { 
  Controls, 
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Toolbar from './workflow/Toolbar';
import { MessageNode } from './workflow/nodes/MessageNode';
import { QuickRepliesNode } from './workflow/nodes/QuickRepliesNode';
import { ConditionNode } from './workflow/nodes/ConditionNode';

const nodeTypes = {
  messageNode: MessageNode,
  quickRepliesNode: QuickRepliesNode,
  conditionNode: ConditionNode,
};

function WorkflowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${type}_${Date.now()}`,
        type,
        position,
        data: { label: type.replace('Node', '') },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div className="flex-1 flex">
      <Toolbar />
      <div className="flex-1 h-full" style={{ background: '#1A1A1A' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
          className="bg-secondary"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default WorkflowEditor;
