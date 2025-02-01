import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import OuterSidebar from './components/OuterSidebar';
import Sidebar from './components/Sidebar';
import WorkflowEditor from './components/WorkflowEditor';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Knowledge from './components/Knowledge';
import RoleSelector from './components/RoleSelector';
import AgentDashboard from './components/AgentDashboard';
import TeamPage from './components/team/TeamPage';

function App() {
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    setUserRole(role);
    navigate('/workflow');
  };

  const handleSignOut = () => {
    setUserRole(null);
    navigate('/');
  };

  if (!userRole) {
    return <RoleSelector onRoleSelect={handleRoleSelect} />;
  }

  return (
    <div className="flex h-screen bg-[#0A0A0A]">
      {userRole === 'admin' ? (
        <>
          <OuterSidebar onSignOut={handleSignOut} />
          <div className="flex-1">
            <Routes>
              <Route path="/workflow" element={
                <div className="flex h-full">
                  <Sidebar />
                  <WorkflowEditor />
                </div>
              } />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/" element={<Navigate to="/workflow" replace />} />
            </Routes>
          </div>
        </>
      ) : (
        <AgentDashboard />
      )}
    </div>
  );
}

export default App;
