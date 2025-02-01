import React, { useState } from 'react';

const SettingsSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-medium text-white mb-4">{title}</h2>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const Toggle = ({ label, description, value, onChange }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-white font-medium">{label}</h3>
      {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
    </div>
    <button
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out
        ${value ? 'bg-purple-600' : 'bg-gray-700'}`}
      onClick={() => onChange(!value)}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out
          ${value ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  </div>
);

const Select = ({ label, description, value, options, onChange }) => (
  <div className="space-y-2">
    <div>
      <h3 className="text-white font-medium">{label}</h3>
      {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
    </div>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#1A1A1A] text-white rounded-lg border border-gray-700 px-3 py-2
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Input = ({ label, description, type = "text", value, onChange }) => (
  <div className="space-y-2">
    <div>
      <h3 className="text-white font-medium">{label}</h3>
      {description && <p className="text-gray-400 text-sm mt-1">{description}</p>}
    </div>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#1A1A1A] text-white rounded-lg border border-gray-700 px-3 py-2
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
    />
  </div>
);

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    soundEnabled: false,
    language: 'en',
    timezone: 'UTC',
    apiKey: '',
    debugMode: false,
    autoSave: true,
    theme: 'dark',
  });

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex-1 bg-[#0A0A0A] p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your application preferences and configurations</p>
        </div>

        {/* General Settings */}
        <div className="bg-[#1A1A1A] rounded-lg p-6 space-y-8">
          <SettingsSection title="General">
            <Select
              label="Language"
              description="Select your preferred language"
              value={settings.language}
              onChange={(value) => updateSetting('language', value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
              ]}
            />
            <Select
              label="Timezone"
              description="Choose your timezone"
              value={settings.timezone}
              onChange={(value) => updateSetting('timezone', value)}
              options={[
                { value: 'UTC', label: 'UTC' },
                { value: 'EST', label: 'Eastern Time' },
                { value: 'PST', label: 'Pacific Time' },
              ]}
            />
          </SettingsSection>

          <SettingsSection title="Notifications">
            <Toggle
              label="Enable Notifications"
              description="Receive notifications for important updates"
              value={settings.notifications}
              onChange={(value) => updateSetting('notifications', value)}
            />
            <Toggle
              label="Sound Effects"
              description="Play sound when receiving notifications"
              value={settings.soundEnabled}
              onChange={(value) => updateSetting('soundEnabled', value)}
            />
          </SettingsSection>

          <SettingsSection title="API Configuration">
            <Input
              label="API Key"
              description="Enter your API key for external services"
              type="password"
              value={settings.apiKey}
              onChange={(value) => updateSetting('apiKey', value)}
            />
          </SettingsSection>

          <SettingsSection title="Advanced">
            <Toggle
              label="Debug Mode"
              description="Enable detailed logging for troubleshooting"
              value={settings.debugMode}
              onChange={(value) => updateSetting('debugMode', value)}
            />
            <Toggle
              label="Auto-Save"
              description="Automatically save changes"
              value={settings.autoSave}
              onChange={(value) => updateSetting('autoSave', value)}
            />
          </SettingsSection>

          {/* Save Button */}
          <div className="pt-4">
            <button
              className="w-full bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700
                transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
