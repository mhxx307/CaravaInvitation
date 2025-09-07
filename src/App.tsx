import React, { useState } from 'react';
import './App.css';
import InvitationForm from './components/InvitationForm';
import InvitationPreview from './components/InvitationPreview';
import SettingsPanel from './components/SettingsPanel';
import { InvitationData } from './types';
import { InvitationTextSettings } from './settings/textSettings';

const App: React.FC = () => {
  const [invitationData, setInvitationData] = useState<InvitationData>({
    salutation: 'Mr.',
    fullName: '',
    position: '',
    companyName: ''
  });

  const [textSettings, setTextSettings] = useState<InvitationTextSettings | null>(null);

  const handleDataChange = (data: InvitationData) => {
    setInvitationData(data);
  };

  const handleReset = () => {
    setInvitationData({
      salutation: 'Mr.',
      fullName: '',
      position: '',
      companyName: ''
    });
  };

  const handleSettingsChange = (settings: InvitationTextSettings) => {
    setTextSettings(settings);
  };

  return (
    <div className="app">
      {/* <SettingsPanel onSettingsChange={handleSettingsChange} /> */}
      <div className="app-container">
        <div className="form-section">
          <InvitationForm 
            data={invitationData}
            onDataChange={handleDataChange}
            onReset={handleReset}
          />
        </div>
        <div className="preview-section">
          <InvitationPreview data={invitationData} customSettings={textSettings} />
        </div>
      </div>
    </div>
  );
};

export default App;
