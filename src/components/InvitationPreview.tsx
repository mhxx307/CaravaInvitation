import React, { useEffect, useRef } from 'react';
import './InvitationPreview.css';
import { InvitationData } from '../types';
import { getTextSettings, InvitationTextSettings } from '../settings/textSettings';

interface InvitationPreviewProps {
  data: InvitationData;
  customSettings?: InvitationTextSettings | null;
}

const InvitationPreview: React.FC<InvitationPreviewProps> = ({ data, customSettings }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const image = imageRef.current;
    
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match original template resolution
    canvas.width = 1000;
    canvas.height = 1675;

    // Draw the template image at full resolution
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Set font properties
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Get text settings (use custom settings if provided, otherwise default)
    const textSettings = customSettings || getTextSettings();

    // Draw salutation and full name on the same line (like in sample)
    if (data.salutation && data.fullName) {
      ctx.fillStyle = textSettings.name.color;
      
      // Both salutation and name use same font size from settings
      ctx.font = `bold ${textSettings.name.size}px Chelthm, serif`;
      const salutationText = data.salutation + ' ';
      const salutationWidth = ctx.measureText(salutationText).width;
      
      // Calculate total width to center the combined text
      const nameWidth = ctx.measureText(data.fullName).width;
      const totalWidth = salutationWidth + nameWidth;
      
      // Draw salutation first
      ctx.fillText(salutationText, textSettings.name.position.x - totalWidth/2 + salutationWidth/2, textSettings.name.position.y);
      
      // Then draw the name
      ctx.fillText(data.fullName, textSettings.name.position.x - totalWidth/2 + salutationWidth + nameWidth/2, textSettings.name.position.y);
    } else if (data.fullName) {
      // Draw only full name if no salutation
      ctx.fillStyle = textSettings.name.color;
      ctx.font = `bold ${textSettings.name.size}px Chelthm, serif`;
      ctx.fillText(data.fullName, textSettings.name.position.x, textSettings.name.position.y);
    }

    // Draw position using global settings
    if (data.position) {
      ctx.fillStyle = textSettings.position.color;
      ctx.font = `bold ${textSettings.position.size}px Chelthm, serif`;
      ctx.fillText(data.position, textSettings.position.position.x, textSettings.position.position.y);
    }

    // Draw company name using global settings
    if (data.companyName) {
      ctx.fillStyle = textSettings.company.color;
      ctx.font = `bold ${textSettings.company.size}px Chelthm, serif`;
      ctx.fillText(data.companyName, textSettings.company.position.x, textSettings.company.position.y);
    }
  }, [data, customSettings]);

  return (
    <div className="invitation-preview">
      <div className="preview-container">
        <img
          ref={imageRef}
          src="/resources/CaravanInvitation.png"
          alt="Template"
          style={{ display: 'none' }}
          onLoad={() => {
            // Trigger canvas redraw when image loads
            const canvas = canvasRef.current;
            if (canvas) {
              const ctx = canvas.getContext('2d');
              if (ctx) {
                canvas.width = canvas.width; // Force redraw
              }
            }
          }}
        />
        <canvas
          ref={canvasRef}
          id="invitation-canvas"
          className="preview-canvas"
        />
      </div>
    </div>
  );
};

export default InvitationPreview;
