// Global text settings for invitation card
export interface TextSettings {
  size: number;
  color: string;
  position: {
    x: number;
    y: number;
  };
}

export interface InvitationTextSettings {
  name: TextSettings;
  position: TextSettings;
  company: TextSettings;
}

// Default settings - easily customizable
export const DEFAULT_TEXT_SETTINGS: InvitationTextSettings = {
  name: {
    size: 46,
    color: '#0a56c7',
    position: {
      x: 500, // center of 1000px canvas
      y: 330  // vertical position
    }
  },
  position: {
    size: 31,
    color: '#0a56c7',
    position: {
      x: 500, // center of 1000px canvas
      y: 390  // vertical position
    }
  },
  company: {
    size: 31,
    color: '#0a56c7',
    position: {
      x: 500, // center of 1000px canvas
      y: 440  // vertical position
    }
  }
};

// Helper function to get current settings
export const getTextSettings = (): InvitationTextSettings => {
  return DEFAULT_TEXT_SETTINGS;
};

// Helper function to update settings
export const updateTextSettings = (
  field: keyof InvitationTextSettings,
  property: keyof TextSettings,
  value: any
): InvitationTextSettings => {
  const newSettings = { ...DEFAULT_TEXT_SETTINGS };
  if (property === 'position') {
    newSettings[field].position = { ...newSettings[field].position, ...value };
  } else {
    (newSettings[field] as any)[property] = value;
  }
  return newSettings;
};
