import React, { useState } from 'react';
import './SettingsPanel.css';
import { getTextSettings, updateTextSettings, InvitationTextSettings } from '../settings/textSettings';

interface SettingsPanelProps {
  onSettingsChange: (settings: InvitationTextSettings) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onSettingsChange }) => {
  const [settings, setSettings] = useState<InvitationTextSettings>(getTextSettings());
  const [isOpen, setIsOpen] = useState(false);

  const updateSetting = (
    field: keyof InvitationTextSettings,
    property: keyof typeof settings.name,
    value: any
  ) => {
    const newSettings = { ...settings };
    if (property === 'position') {
      newSettings[field].position = { ...newSettings[field].position, ...value };
    } else {
      (newSettings[field] as any)[property] = value;
    }
    setSettings(newSettings);
    onSettingsChange(newSettings);
  };

  return (
    <div className="settings-panel">
      <button 
        className="settings-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚙️ Settings
      </button>
      
      {isOpen && (
        <div className="settings-content">
          <h3>Text Settings</h3>
          
          {/* Name Settings */}
          <div className="setting-group">
            <h4>Name & Salutation</h4>
            <div className="setting-row">
              <label>Size (px):</label>
              <input
                type="number"
                value={settings.name.size}
                onChange={(e) => updateSetting('name', 'size', parseInt(e.target.value))}
              />
            </div>
            <div className="setting-row">
              <label>Color:</label>
              <input
                type="color"
                value={settings.name.color}
                onChange={(e) => updateSetting('name', 'color', e.target.value)}
              />
            </div>
            <div className="setting-row">
              <label>X Position:</label>
              <input
                type="number"
                value={settings.name.position.x}
                onChange={(e) => updateSetting('name', 'position', { x: parseInt(e.target.value) })}
              />
            </div>
            <div className="setting-row">
              <label>Y Position:</label>
              <input
                type="number"
                value={settings.name.position.y}
                onChange={(e) => updateSetting('name', 'position', { y: parseInt(e.target.value) })}
              />
            </div>
          </div>

          {/* Position Settings */}
          <div className="setting-group">
            <h4>Position/Title</h4>
            <div className="setting-row">
              <label>Size (px):</label>
              <input
                type="number"
                value={settings.position.size}
                onChange={(e) => updateSetting('position', 'size', parseInt(e.target.value))}
              />
            </div>
            <div className="setting-row">
              <label>Color:</label>
              <input
                type="color"
                value={settings.position.color}
                onChange={(e) => updateSetting('position', 'color', e.target.value)}
              />
            </div>
            <div className="setting-row">
              <label>X Position:</label>
              <input
                type="number"
                value={settings.position.position.x}
                onChange={(e) => updateSetting('position', 'position', { x: parseInt(e.target.value) })}
              />
            </div>
            <div className="setting-row">
              <label>Y Position:</label>
              <input
                type="number"
                value={settings.position.position.y}
                onChange={(e) => updateSetting('position', 'position', { y: parseInt(e.target.value) })}
              />
            </div>
          </div>

          {/* Company Settings */}
          <div className="setting-group">
            <h4>Company Name</h4>
            <div className="setting-row">
              <label>Size (px):</label>
              <input
                type="number"
                value={settings.company.size}
                onChange={(e) => updateSetting('company', 'size', parseInt(e.target.value))}
              />
            </div>
            <div className="setting-row">
              <label>Color:</label>
              <input
                type="color"
                value={settings.company.color}
                onChange={(e) => updateSetting('company', 'color', e.target.value)}
              />
            </div>
            <div className="setting-row">
              <label>X Position:</label>
              <input
                type="number"
                value={settings.company.position.x}
                onChange={(e) => updateSetting('company', 'position', { x: parseInt(e.target.value) })}
              />
            </div>
            <div className="setting-row">
              <label>Y Position:</label>
              <input
                type="number"
                value={settings.company.position.y}
                onChange={(e) => updateSetting('company', 'position', { y: parseInt(e.target.value) })}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
