import React from 'react';
import './InvitationForm.css';
import { InvitationData } from '../types';

interface InvitationFormProps {
  data: InvitationData;
  onDataChange: (data: InvitationData) => void;
  onReset: () => void;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ data, onDataChange, onReset }) => {
  const handleInputChange = (field: keyof InvitationData, value: string) => {
    onDataChange({
      ...data,
      [field]: value
    });
  };

  const handleDownload = () => {
    const canvas = document.getElementById('invitation-canvas') as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement('a');
      link.download = `caravan-invitation-${data.fullName.replace(/\s+/g, '-')}.png`;
      // Download at full resolution (1000x1675)
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    }
  };

  return (
    <div className="invitation-form">
      <div className="form-header">
        <div className="logo">
          <span className="logo-text">SOTRANS GROUP</span>
        </div>
        <h1 className="form-title">Tạo Thiệp Mời Caravan</h1>
      </div>

      <div className="form-content">
        <div className="form-group">
          <label className="form-label">1. Danh xưng:</label>
          <select
            className="form-select"
            value={data.salutation}
            onChange={(e) => handleInputChange('salutation', e.target.value as 'Mr.' | 'Ms.')}
          >
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">2. Họ và tên:</label>
          <input
            type="text"
            className="form-input"
            value={data.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="Nhập họ và tên"
          />
        </div>

        <div className="form-group">
          <label className="form-label">3. Chức vụ:</label>
          <input
            type="text"
            className="form-input"
            value={data.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            placeholder="Nhập chức vụ"
          />
        </div>

        <div className="form-group">
          <label className="form-label">4. Tên công ty:</label>
          <input
            type="text"
            className="form-input"
            value={data.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            placeholder="Nhập tên công ty"
          />
        </div>

        <div className="form-actions">
          <div className="action-group">
            <label className="form-label">5. Tải thiệp mời:</label>
            <button 
              className="btn btn-secondary"
              onClick={handleDownload}
              disabled={!data.fullName || !data.position || !data.companyName}
            >
              Tải hình về máy
            </button>
          </div>

          <div className="action-group">
            <button 
              className="btn btn-reset"
              onClick={onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationForm;
